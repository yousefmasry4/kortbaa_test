import {UpdateProductRepo} from '../../data/protocols/db'
import { UpdateProduct } from "../../domain/use-cases";

export class DbUpdateProduct implements UpdateProduct {
    constructor(private readonly updateProductRepo: UpdateProductRepo) {}
    perform = async (params: UpdateProduct.Params): Promise<UpdateProduct.Result> => {
        const product = await this.updateProductRepo.UpdateProduct(params);
        return product;
    }
}