import { Controller, HttpResponse } from "@/presentation/protocols";
import { CreateProduct } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { GenericError, MissingParametersError } from "@/presentation/errors";
import { Validator } from "@/presentation/helpers";
import {JwtAdapter} from '@/presentation/middelware';

export class CreateProductController implements Controller {
    constructor(private readonly createProduct: CreateProduct) {}
    handle= async (request: CreateProductController.Request,headers:CreateProductController.Headers) => {
        try {
            const { name, image, price } = request;
            const { authorization } = headers;
            /// validate token
            const jwtAdapter = new JwtAdapter();
            var userId;
            try {
                userId=await jwtAdapter.verify(authorization).then((payload) => {
                    return payload.id;
                });
            } catch (error) {
                throw HttpHelper.UNAUTHORIZED();
            }
            if(!name && !image && !price ) throw HttpHelper.BAD_REQUEST(new MissingParametersError());
            /// validate price
            if(!Validator.validatePrice(price)) throw HttpHelper.BAD_REQUEST(new GenericError('invalid price'));
            /// create product
            const product = await this.createProduct.perform({
                name,
                price,
                image,
                userId
            }).catch((error) => {
                throw HttpHelper.INTERNAL_SERVER_ERROR(error);
            });
            return HttpHelper.CREATED(product);
        } catch (error) {
            if(error == Error) return HttpHelper.BAD_REQUEST(error as Error);
            return error as HttpResponse<Error>;
        }
    }
}

export namespace CreateProductController {
    export type Request = {
        name: string;
        price: number;
        description: string;
        image: string;
    };
    export type Headers = {
        authorization: string;
    } 
}