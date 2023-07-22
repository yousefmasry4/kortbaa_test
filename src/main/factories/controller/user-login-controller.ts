import { makeDbUserLogin } from "@/main/factories/use-cases/db";
import { UserLoginController } from "@/presentation/controllers"; 

export const makeUserLoginController = (): UserLoginController => {
    return new UserLoginController(makeDbUserLogin());
}
