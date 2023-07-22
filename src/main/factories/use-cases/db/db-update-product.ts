import { DbUpdateProduct } from "@/data/use-cases";
import { ProductRepo } from "@/infrastructure/db/repos";

export const makeDbUpdateProduct = () => {
    const productRepo = new ProductRepo();
    return new DbUpdateProduct(productRepo);
}
