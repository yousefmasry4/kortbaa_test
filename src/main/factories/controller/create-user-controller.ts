import { makeDbCreateUser } from "@/main/factories/use-cases/db";
import { CreateUserController } from "@/presentation/controllers"; 

export const makeCreateUserController = () => {
    const createUserController = new CreateUserController(makeDbCreateUser());
    return createUserController;
}