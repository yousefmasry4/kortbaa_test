import { makeDbCreateProduct } from "@/main/factories/use-cases/db";
import { CreateProductController } from "@/presentation/controllers"; 

export const makeCreateProductController = () => {
    const controller = new CreateProductController(makeDbCreateProduct());
    return controller;
}

