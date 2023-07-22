import { Router } from "express";

import { usersRoutes } from "@/main/routes";
import { productRoutes } from "@/main/routes";

const router = Router();

router.use(usersRoutes);
router.use(productRoutes);

export { router, usersRoutes, productRoutes };
