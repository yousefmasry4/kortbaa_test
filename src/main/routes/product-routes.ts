/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { expressRouterAdapter } from "@/main/adapters";
import { makeCreateProductController, makeDeleteProductController,makeGetUserProductsController,makeUpdateProductController } from "@/main/factories/controller";

const productRoutes = Router();

productRoutes.post("/products", expressRouterAdapter(makeCreateProductController()));
productRoutes.delete("/products", expressRouterAdapter(makeDeleteProductController()));
productRoutes.get("/products", expressRouterAdapter(makeGetUserProductsController()));
productRoutes.put("/products", expressRouterAdapter(makeUpdateProductController()));


export { productRoutes };


