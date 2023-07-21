import { ProductsModel } from "../../../domain/models";

export interface UpdateProductRepo {
    UpdateProduct: (params: UpdateProductRepo.Params) => Promise<UpdateProductRepo.Result>;
}
export namespace UpdateProductRepo {
    export type Params = {
        name?: string;
        price?: number;
        image?: string;
        userId?: number;
    };
    export type Result = {
        product?: ProductsModel;
    };
}