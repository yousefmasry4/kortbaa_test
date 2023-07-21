export interface GetUserProducts {
    perform: (params: GetUserProducts.Params) => Promise<GetUserProducts.Result>;
}
/// consider pagination
export namespace GetUserProducts {
    export type Params = {
        userId: number;
        skip: number;
        take: number;
    };
    export type Result = {
        products: object[];
    };
}