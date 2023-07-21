import {CreateUserRepo, UserLoginRepo } from "@/data/protocols";
import { prismaClient } from "@/infrastructure/db";
import bcrypt from 'bcrypt';

export class UserRepo implements CreateUserRepo, UserLoginRepo {
    CreateUser = async (params: CreateUserRepo.Params): Promise<CreateUserRepo.Result> => {
        const userCollection = prismaClient.getConnection().user;
        ///encriptar password
        params.password = await bcrypt.hash(params.password, 10);
        const user = await userCollection.create({
            data: { ...params}
        });
        return {user: {
            id: user.id,
            email: user.email,
            name: user.name??'user',
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }}};
    
    
    UserLogin = async (params: UserLoginRepo.Params): Promise<UserLoginRepo.Result> => {
        const userCollection = prismaClient.getConnection().user;
        const user = await userCollection.findFirst({
            where: { 
                email: params.email,
                
        }});
        if(!user) return { user: undefined };
        const isMatch = bcrypt.compareSync(params.password, user.password);
        if(!isMatch) return { user: undefined };



        return { user: {
            id: user.id,
            email: user.email,
            name: user.name??'user',
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        } 
    }
}
}