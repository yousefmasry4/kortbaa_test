import { ProductsModel } from "../models";

export interface CreateProduct {
    perform: (params: CreateProduct.Params) => Promise<CreateProduct.Result>;
}
export namespace CreateProduct {
    export type Params = {
        name: string;
        price: number;
        image: string;
        userId: number;
    };
    export type Result = {
        product?: ProductsModel;
    };
}