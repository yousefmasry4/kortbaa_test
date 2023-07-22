import { Controller, HttpResponse } from "@/presentation/protocols";
import { GetUserProducts } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import {JwtAdapter} from '@/presentation/middelware';

export class GetUserProductsController implements Controller {
    constructor(private readonly getUserProducts: GetUserProducts) {}
    handle= async (request: GetUserProductsController.Request,headers:GetUserProductsController.Headers) => {
        try {
            const { take,skip } = request;
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
            /// get user products
            const products = await this.getUserProducts.perform({
                userId: Number(userId),
                skip: skip,
                take: take,
            }).catch((error) => {
                throw HttpHelper.INTERNAL_SERVER_ERROR(error);
            });
            return HttpHelper.OK(products);
        } catch (error) {
            if(error instanceof Error) return HttpHelper.BAD_REQUEST(error);
            return error as HttpResponse<Error>;
        }
    }
}

export namespace GetUserProductsController {
    export type Request = {
        take: number;
        skip: number;
    };
    export type Headers = {
        authorization: string;
    }
}