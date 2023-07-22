
import {DbCreateProduct} from '@/data/use-cases';
import { MockCreateProductRepoSpy } from "@/tests/data/mocks";


const makeSut = () => {
    const mockCreateProductRepoSpy = new MockCreateProductRepoSpy();
    const sut = new DbCreateProduct(mockCreateProductRepoSpy);
    return {
        sut,
        mockCreateProductRepoSpy
    }
}

describe('DbCreateProduct', () => {
    test('should call CreateProductRepo with correct params', async () => {
        const { sut } = makeSut();
        const params = {
            name: "name",
            price: 123,
            image: "url",
        }
        const result=await sut.perform({
            name: params.name,
            price: params.price,
            image: params.image,
            userId:1
        });
        expect(result).toEqual(
            {
                product: {
                    ...params,
                    updatedAt: result.product?.updatedAt,
                    createdAt: result.product?.createdAt,
                    id: result.product?.id
            }
        }
        );
    });
    test('should throw if CreateProductRepo throws', async () => {
        const { sut, mockCreateProductRepoSpy } = makeSut();
        jest.spyOn(mockCreateProductRepoSpy, 'CreateProduct').mockImplementationOnce(() => {throw new Error()});
        const params = {
            name: "name",
            price: 123,
            image: "url",
        }
        const promise = sut.perform({
            name: params.name,
            price: 0,
            image: params.image,
            userId:1
        });
        await expect(promise).rejects.toThrow();
    });
});