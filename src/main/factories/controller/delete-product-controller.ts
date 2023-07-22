import { makeDbDeleteProduct } from "@/main/factories/use-cases/db";
import { DeleteProductController } from "@/presentation/controllers"; 

export const makeDeleteProductController = () => {
    const deleteProductController = new DeleteProductController(makeDbDeleteProduct());
    return deleteProductController;
}