export interface GetUserProductsRepo {
    GetUserProducts: (params: GetUserProductsRepo.Params) => Promise<GetUserProductsRepo.Result>;
}
/// consider pagination
export namespace GetUserProductsRepo {
    export type Params = {
        userId: number;
        skip: number;
        take: number;
    };
    export type Result = {
        products: object[];
    };
}