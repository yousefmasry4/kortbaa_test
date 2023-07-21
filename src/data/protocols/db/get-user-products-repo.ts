export interface GetUserProductsRepo {
    GetUserProducts: (params: GetUserProductsRepo.Params) => Promise<GetUserProductsRepo.Result>;
}
/// consider pagination
export namespace GetUserProductsRepo {
    export type Params = {
        userId: number;
        page: number;
        limit: number;
    };
    export type Result = {
        products: object[];
    };
}