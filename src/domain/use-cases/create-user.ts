import { UserModel } from "../models";

export interface CreateUser {
    perform: (params: CreateUser.Params) => Promise<CreateUser.Result>;
  }
  
  export namespace CreateUser {
    export type Params = { email: string; name: string; password: string };
    export type Result = { user?: UserModel };
  }
  