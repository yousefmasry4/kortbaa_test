import { CreateProduct } from "../use-cases";

import { faker } from "@faker-js/faker";

export const mockCreateProductParams = (): CreateProduct.Params => ({
    name: "name",
    price: 123,
    userId: 1,
    image: "url",
});

export const mockProduct = (): CreateProduct.Result => ({
    product: {
        id: 1,
        name: "name",
        price: 123,
        image: "url",
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
    },
});
