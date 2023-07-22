/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { expressRouterAdapter } from "@/main/adapters";
import { makeCreateUserController, makeUserLoginController } from "@/main/factories/controller";

const usersRoutes = Router();

usersRoutes.post("/users/create", expressRouterAdapter(makeCreateUserController()));
usersRoutes.post("/users/login", expressRouterAdapter(makeUserLoginController()));



export { usersRoutes };


