import { DbDeleteProduct } from "@/data/use-cases";
import { ProductRepo } from "@/infrastructure/db/repos";

export const makeDbDeleteProduct = () => {
    const productRepo = new ProductRepo();
    return new DbDeleteProduct(productRepo);
}

