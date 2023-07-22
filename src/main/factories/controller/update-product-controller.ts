import { makeDbUpdateProduct } from "@/main/factories/use-cases/db";
import { UpdateProductController } from "@/presentation/controllers"; 

export const makeUpdateProductController = () => {
    const updateProductController = new UpdateProductController(makeDbUpdateProduct());
    return updateProductController;
}
