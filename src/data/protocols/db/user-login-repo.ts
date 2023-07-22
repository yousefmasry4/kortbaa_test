import { UserModel } from "../../../domain/models";

export interface UserLoginRepo {
    UserLogin: (params: UserLoginRepo.Params) => Promise<UserLoginRepo.Result>;
  }
  
export namespace UserLoginRepo {
    export type Params = { email: string; password: string };
    export type Result = { user?: UserModel };
}