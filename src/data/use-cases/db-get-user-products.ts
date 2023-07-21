import {GetUserProductsRepo} from '../../data/protocols/db'
import { GetUserProducts } from "../../domain/use-cases";

export class DbGetUserProducts implements GetUserProducts {
    constructor(private readonly getUserProductsRepo: GetUserProductsRepo) {}
    perform = async (params: GetUserProducts.Params): Promise<GetUserProducts.Result> => {
        const products = await this.getUserProductsRepo.GetUserProducts(params);
        return products;
    }
}