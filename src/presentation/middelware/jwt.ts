import { sign, SignOptions } from 'jsonwebtoken';

export class JwtAdapter {
    constructor(private readonly secret: string) {}
    sign = async (params: JwtAdapter.Params): Promise<JwtAdapter.Result> => {
        const { payload, options } = params;
        const token = sign(payload, this.secret, options);
        return { token };
    }

    verify = async (token: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            try {
                const payload = sign(token, this.secret);
                resolve(payload);
            } catch (error) {
                reject(error);
            }
        });
    }

}

export namespace JwtAdapter {
    export type Params = {
        payload: any;
        options: SignOptions;
    }
    export type Result = {
        token: string;
    }
}