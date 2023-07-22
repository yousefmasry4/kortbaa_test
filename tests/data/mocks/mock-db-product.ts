import { CreateProductRepo,DeleteProductRepo,UpdateProductRepo,GetUserProductsRepo } from "@/data/protocols";
import { mockProduct } from "@/tests/domain/mocks";

export class MockCreateProductRepoSpy implements CreateProductRepo {
    params: CreateProductRepo.Params|undefined;
    result = mockProduct();
    CreateProduct = async (params: CreateProductRepo.Params): Promise<CreateProductRepo.Result> => {
        this.params = params;
        return this.result;
    }
}

export class MockDeleteProductRepoSpy implements DeleteProductRepo {
    params: DeleteProductRepo.Params|undefined;
    DeleteProduct = async (params: DeleteProductRepo.Params): Promise<DeleteProductRepo.Result> => {
        this.params = params;
        return {
            msg: 'product deleted'
        };
    }
}

export class MockUpdateProductRepoSpy implements UpdateProductRepo {
    params: UpdateProductRepo.Params|undefined;
    result = mockProduct();
    UpdateProduct = async (params: UpdateProductRepo.Params): Promise<UpdateProductRepo.Result> => {
        this.params = params;

        return {
            product:{
                id: this.result.product!.id,
                name: this.params.name??this.result.product!.name,
                price: this.params.price??this.result.product!.price,
                image: this.params.image??this.result.product!.image,
                createdAt: this.result.product!.createdAt,
                updatedAt: this.result.product!.updatedAt
            }
        };
    }
}

export class MockGetUserProductsRepoSpy implements GetUserProductsRepo {
    params: GetUserProductsRepo.Params|undefined;
    result = [mockProduct()];
    GetUserProducts = async (params: GetUserProductsRepo.Params): Promise<GetUserProductsRepo.Result> => {
        this.params = params;
        return {products: this.result};
    }
}