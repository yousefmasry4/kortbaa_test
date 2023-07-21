import { Controller, HttpResponse } from "@/presentation/protocols";
import { DeleteProduct } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { MissingParametersError } from "@/presentation/errors";
import { Validator } from "@/presentation/helpers";
import {JwtAdapter} from '@/presentation/middelware';

export class DeleteProductController implements Controller {
    constructor(private readonly deleteProduct: DeleteProduct) {}
    handle= async (request: DeleteProductController.Request,headers:DeleteProductController.Headers) => {
        try {
            const { id } = request;
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
            if(!id) throw HttpHelper.BAD_REQUEST(new MissingParametersError());
            /// validate id
            if(!Validator.validateId(id)) throw HttpHelper.BAD_REQUEST(new Error('invalid id'));
            /// delete product
            await this.deleteProduct.perform({
                id: Number(id),
            });
            return HttpHelper.DELETED();
        } catch (error) {
            if(error instanceof Error) return HttpHelper.BAD_REQUEST(error);
            return error as HttpResponse<Error>;
        }
    }
}

export namespace DeleteProductController {
    export type Request = {
        id: string;
    };
    export type Headers = {
        authorization: string;
    }
}