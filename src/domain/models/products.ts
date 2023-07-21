// model products {
//     id        Int      @id @default(autoincrement())
//     name      String
//     price     Int    
//     image     String 
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     user      User     @relation("UserToProduct", fields: [userId], references: [id])
//     userId    Int
//   }  


export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    user: object;
    userId: number;
};
