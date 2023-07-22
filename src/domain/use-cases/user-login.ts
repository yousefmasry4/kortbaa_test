import { UserModel } from "../models";
export interface UserLogin {
    perform: (params: UserLogin.Params) => Promise<UserLogin.Result>;
  }
  
export namespace UserLogin {
    export type Params = { email: string; password: string };
    export type Result = { user?: UserModel };
}