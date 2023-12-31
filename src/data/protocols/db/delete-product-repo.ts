export interface DeleteProductRepo {
    DeleteProduct: (params: DeleteProductRepo.Params) => Promise<DeleteProductRepo.Result>;
}
export namespace DeleteProductRepo {
    export type Params = {
        id: number;
        userId: number;
    };
    export type Result = {
        msg: String;
    };
}