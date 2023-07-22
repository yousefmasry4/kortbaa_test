export type UserModel = {
    id: number;
    email: string;
    password?: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
};