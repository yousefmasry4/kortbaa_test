import { sign, SignOptions } from 'jsonwebtoken';
import { env } from 'node:process';
/// get JWT_ACCESS_SECRET from env
const secret = env.JWT_ACCESS_SECRET;

export class JwtAdapter {
    sign = async (params: JwtAdapter.Params): Promise<JwtAdapter.Result> => {
        const { payload, options } = params;
        const token = sign(payload,secret!, options);
        return { token };
    }

    verify = async (token: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            try {
                token=token.replace('Bearer ', '');
                const payload = JSON.parse(JSON.stringify(require('jsonwebtoken').verify(token, secret!)));
                /// get data from payload
                resolve(payload) as any;
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