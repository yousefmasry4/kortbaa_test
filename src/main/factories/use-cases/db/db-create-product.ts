import { DbCreateProduct } from "@/data/use-cases";
import { ProductRepo } from "@/infrastructure/db/repos";

export const makeDbCreateProduct = () => {
    const productRepo = new ProductRepo();
    return new DbCreateProduct(productRepo);
}


