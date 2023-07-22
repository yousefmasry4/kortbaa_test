import {DeleteProductRepo} from '../../data/protocols/db'
import { DeleteProduct } from "../../domain/use-cases";

export class DbDeleteProduct implements DeleteProduct {
    constructor(private readonly deleteProductRepo: DeleteProductRepo) {}
    perform = async (params: DeleteProduct.Params): Promise<DeleteProduct.Result> => {
        const product = await this.deleteProductRepo.DeleteProduct(params);
        return product;
    }
}