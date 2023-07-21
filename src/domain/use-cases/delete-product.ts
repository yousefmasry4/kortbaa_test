export interface DeleteProduct {
    perform: (params: DeleteProduct.Params) => Promise<DeleteProduct.Result>;
}
export namespace DeleteProduct {
    export type Params = {
        id: number;
    };
    export type Result = {
        msg: String;
    };
}