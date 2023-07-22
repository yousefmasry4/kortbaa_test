import { DbCreateUser } from "@/data/use-cases";
import { UserRepo } from "@/infrastructure/db/repos";

export const makeDbCreateUser = () => {
    const userRepo = new UserRepo();
    return new DbCreateUser(userRepo);
}