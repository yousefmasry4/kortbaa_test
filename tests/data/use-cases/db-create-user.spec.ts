
import {DbCreateUser} from '@/data/use-cases';
import { MockCreateUserRepoSpy } from "@/tests/data/mocks";

const makeSut = () => {
    const mockCreateUserRepoSpy = new MockCreateUserRepoSpy();
    const sut = new DbCreateUser(mockCreateUserRepoSpy);
    return {
        sut,
        mockCreateUserRepoSpy
    }
}

describe('DbCreateUser', () => {
    test('should call CreateUserRepo with correct params', async () => {
        const { sut } = makeSut();
        const params = {
            name: "name",
            email: "Jettie_Wisoky@gmail.com",
            password: "12345678password",
        }
        const result=await sut.perform({
            name: params.name,
            email: params.email,
            password: params.password,
        });
        expect(result).toEqual(
            {
                user: {
                    ...params,
                    updatedAt: result.user?.updatedAt,
                    createdAt: result.user?.createdAt,
                    id: result.user?.id
            }
        }
        );
    });
    // test('should throw if CreateUserRepo throws', async () => {
    //     const { sut, mockCreateUserRepoSpy } = makeSut();
    //     jest.spyOn(mockCreateUserRepoSpy, 'CreateUser').mockImplementationOnce(() => {throw new Error()});
    //     const params = {
    //         name: "name",
    //         email: "email",
    //         password: "password",
    //     }
    //     const promise = sut.perform({
    //         name: params.name,
    //         email: params.email,
    //         password: params.password,
    //     });
    //     await expect(promise).rejects.toThrow();
});