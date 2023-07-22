import { DbUserLogin } from "@/data/use-cases";
import { UserRepo } from "@/infrastructure/db/repos";

export const makeDbUserLogin = () => {
    const userRepo = new UserRepo();
    return new DbUserLogin(userRepo);
}
