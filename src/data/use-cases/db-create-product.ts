import {CreateProductRepo} from '../../data/protocols/db'
import { CreateProduct } from "../../domain/use-cases";

export class DbCreateProduct implements CreateProduct {
    constructor(private readonly createProductRepo: CreateProductRepo) {}
    perform = async (params: CreateProduct.Params): Promise<CreateProduct.Result> => {
        const product = await this.createProductRepo.CreateProduct(params);
        return product;
}
}