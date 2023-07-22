import { CreateUserRepo,UserLoginRepo } from "@/data/protocols";
import { mockUser } from "@/tests/domain/mocks";

export class MockCreateUserRepoSpy implements CreateUserRepo {
    params: CreateUserRepo.Params|undefined;
    
    CreateUser = async (params: CreateUserRepo.Params): Promise<CreateUserRepo.Result> => {
        this.params = params;
        return {...this.result};
    }
}

export class MockUserLoginRepSpy implements UserLoginRepo {
    params: UserLoginRepo.Params|undefined;
    result = mockUser();
    UserLogin = async (params: UserLoginRepo.Params): Promise<UserLoginRepo.Result> => {
        this.params = params;
        return {...this.result};
    }
}

