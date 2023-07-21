import {CreateProductRepo, DeleteProductRepo, GetUserProductsRepo, UpdateProductRepo } from "@/data/protocols";
import { prismaClient } from "@/infrastructure/db";

export class ProductRepo implements CreateProductRepo, DeleteProductRepo, GetUserProductsRepo, UpdateProductRepo {

    CreateProduct = async (params: CreateProductRepo.Params): Promise<CreateProductRepo.Result> => {
        const productCollection = prismaClient.getConnection().products;
        const product = await productCollection.create({
            data: { ...params}
        });
        return {product: {
            ...product
        }}}

    DeleteProduct = async (params: DeleteProductRepo.Params): Promise<DeleteProductRepo.Result> => {
        const productCollection = prismaClient.getConnection().products;
        await productCollection.delete({
            where: { id: params.id , userId: params.userId}
        });
        return {msg: 'product deleted'}}

    GetUserProducts = async (params: GetUserProductsRepo.Params): Promise<GetUserProductsRepo.Result> => {
        const productCollection = prismaClient.getConnection().products;
        /// apply pagination
        const products = await productCollection.findMany({
            where: { userId: params.userId },
            skip: params.skip,
            take: params.take
        });
        return {products: products}}

    UpdateProduct = async (params: UpdateProductRepo.Params): Promise<UpdateProductRepo.Result> => {
        const productCollection = prismaClient.getConnection().products;
        const product = await productCollection.update({
            where: { id: params.id },
            data: { ...params }
        });
        return {product: {
            ...product
        }}}
}
    
