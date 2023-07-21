// model User {
//     id        Int      @id @default(autoincrement())
//     email     String   @unique
//     name      String?
//     products  products[] @relation("UserToProduct")
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }

export type User = {
    id: number;
    email: string;
    name: string;
    products: object[];
    createdAt: Date;
    updatedAt: Date;
};