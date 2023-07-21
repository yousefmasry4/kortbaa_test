import { ProductsModel } from "../../../domain/models";

export interface CreateProductRepo {
    CreateProduct: (params: CreateProductRepo.Params) => Promise<CreateProductRepo.Result>;
}
export namespace CreateProductRepo {
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