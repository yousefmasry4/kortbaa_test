import { makeDbGetUserProducts } from "@/main/factories/use-cases/db";
import { GetUserProductsController } from "@/presentation/controllers"; 

export const makeGetUserProductsController = () => {
    const dbGetUserProducts = makeDbGetUserProducts();
    const getUserProductsController = new GetUserProductsController(dbGetUserProducts);
    return getUserProductsController;
}