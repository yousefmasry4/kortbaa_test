import { Controller, HttpResponse } from "@/presentation/protocols";
import { UpdateProduct } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { MissingParametersError } from "@/presentation/errors";
import { Validator } from "@/presentation/helpers";
import {JwtAdapter} from '@/presentation/middelware';

export class UpdateProductController implements Controller {
    constructor(private readonly updateProduct: UpdateProduct) {}
    handle= async (request: UpdateProductController.Request,headers:UpdateProductController.Headers) => {
        try {
            const { id, name, image, price } = request;
            const { authorization } = headers;
            /// validate token
            const jwtAdapter = new JwtAdapter();
            var userId;
            try {
                userId = await jwtAdapter.verify(authorization).then((payload) => {
                    return payload.id;
                });
            } catch (error) {
                throw HttpHelper.UNAUTHORIZED();
            }
            if(!id || !name || !image || !price ) throw HttpHelper.BAD_REQUEST(new MissingParametersError());
            /// validate id
            if(!Validator.validateId(id)) throw HttpHelper.BAD_REQUEST(new Error('invalid id'));
            /// validate price
            if(!Validator.validatePrice(price)) throw HttpHelper.BAD_REQUEST(new Error('invalid price'));
            /// update product
            const product = await this.updateProduct.perform({
                name,
                price,
                image,
                userId,
                id: Number(id),
            });
            return HttpHelper.OK(product);
        } catch (error) {
            if(error instanceof Error) return HttpHelper.BAD_REQUEST(error);
            return error as HttpResponse<Error>;
        }
    }
}

export namespace UpdateProductController {
    export type Request = {
        id: string;
        name?: string;
        price?: number;
        image?: string;
    };
    export type Headers = {
        authorization: string;
    }
}