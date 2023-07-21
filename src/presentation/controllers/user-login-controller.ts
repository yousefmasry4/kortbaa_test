import { Controller, HttpResponse } from "@/presentation/protocols";
import { UserLogin } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { MissingParametersError } from "@/presentation/errors";
import { Validator } from "@/presentation/helpers";
import {JwtAdapter} from '@/presentation/middelware';

export class UserLoginController implements Controller {
    constructor(private readonly userLogin: UserLogin) {}
    handle= async (request: UserLoginController.Request) => {
        try {
            const { email, password } = request;
            if(!email || !password) throw HttpHelper.BAD_REQUEST(new MissingParametersError());
            if(!Validator.validateEmail(email)) throw HttpHelper.BAD_REQUEST(new Error('invalid email'));
            const user = await this.userLogin.perform({
                email,
                password
            });
            if(!user) throw HttpHelper.BAD_REQUEST(new Error('incorrect password or email does not exist'))
            /// generate token
            const jwtAdapter = new JwtAdapter();
            const token = await jwtAdapter.sign({
                payload: {
                    id: user.user?.id,
                },
                options: {
                    expiresIn: '1d'
                }
            });

            return HttpHelper.OK({
                user: {...user.user},
                token: token.token
            });
        } catch (error) {
            if(error instanceof Error) return HttpHelper.BAD_REQUEST(error);
            return error as HttpResponse<Error>;
        }
    }
}

export namespace UserLoginController {
    export type Request = {
        email: string;
        password: string;
    };
}

