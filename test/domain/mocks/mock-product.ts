import { CreateProduct } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export const mockCreateUserParams = (userId:number): CreateProduct.Params => ({
    name: faker.commerce.productName(),
    price: 123,
    userId: userId,
    image: faker.image.imageUrl(),
});