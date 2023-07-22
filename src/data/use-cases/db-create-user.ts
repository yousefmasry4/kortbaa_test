import {CreateUserRepo} from '../../data/protocols/db'
import { CreateUser } from "../../domain/use-cases";

export class DbCreateUser implements CreateUser {
    constructor(private readonly createUserRepo: CreateUserRepo) {}
    perform = async (params: CreateUser.Params): Promise<CreateUser.Result> => {
        const user = await this.createUserRepo.CreateUser(params);
        return user;
    }
}