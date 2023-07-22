import { DbGetUserProducts } from "@/data/use-cases";
import { ProductRepo } from "@/infrastructure/db/repos";

export const makeDbGetUserProducts = (): DbGetUserProducts => {
    const productRepo = new ProductRepo();
    return new DbGetUserProducts(productRepo);
}
