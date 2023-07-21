export type UserModel = {
    id: number;
    email: string;
    name: string;
    products: object[];
    createdAt: Date;
    updatedAt: Date;
};