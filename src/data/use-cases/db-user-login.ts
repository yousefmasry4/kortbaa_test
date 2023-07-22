import {UserLoginRepo} from '../../data/protocols/db'
import { UserLogin } from "../../domain/use-cases";

export class DbUserLogin implements UserLogin {
    constructor(private readonly userLoginRepo: UserLoginRepo) {}
    perform = async (params: UserLogin.Params): Promise<UserLogin.Result> => {
        const user = await this.userLoginRepo.UserLogin(params);
        return user;
    }
}