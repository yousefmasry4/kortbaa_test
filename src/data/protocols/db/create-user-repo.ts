import { UserModel } from "../../../domain/models";

export interface CreateUserRepo {
    CreateUser: (params: CreateUserRepo.Params) => Promise<CreateUserRepo.Result>;
  }
  
  export namespace CreateUserRepo {
    export type Params = { email: string; name: string; password: string };
    export type Result = { user?: UserModel };
  }
  