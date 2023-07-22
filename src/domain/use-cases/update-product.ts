import { ProductsModel } from "../models";

export interface UpdateProduct {
    perform: (params: UpdateProduct.Params) => Promise<UpdateProduct.Result>;
}
export namespace UpdateProduct {
    export type Params = {
        name?: string;
        price?: number;
        image?: string;
        userId?: number;
        id: number;
    };
    export type Result = {
        product?: ProductsModel;
    };
}