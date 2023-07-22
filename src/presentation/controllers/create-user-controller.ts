import { Controller, HttpResponse } from "@/presentation/protocols";
import { CreateUser } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { GenericError, MissingParametersError } from "@/presentation/errors";
import { Validator } from "@/presentation/helpers";
import {JwtAdapter} from '@/presentation/middelware';


export class CreateUserController implements Controller {
    constructor(private readonly createUser: CreateUser) {}
    handle= async (request: CreateUserController.Request) => {
        try {
            const { email, password, name } = request;
            if(!email && !password && !name) throw HttpHelper.BAD_REQUEST(new MissingParametersError());
            /// validate email
            if(!Validator.validateEmail(email)) throw HttpHelper.BAD_REQUEST(new GenericError('invalid email'));
            /// validate password
            if(!Validator.validatePassword(password)) throw HttpHelper.BAD_REQUEST(new GenericError('invalid password, must be at least 8 characters long, contain at least one number and one letter'));
            console.log('here');
            const user = await this.createUser.perform({
                email,
                password,
                name
            }).catch((error) => {
                throw HttpHelper.INTERNAL_SERVER_ERROR(error);
            });
            /// create token
            const jwtAdapter = new JwtAdapter();
            const token = await jwtAdapter.sign({
                payload: {
                    id: user.user!.id,
                },
                options: {
                    expiresIn: '1h'
                }
            });
            console.log(token);
            return HttpHelper.CREATED({
                user: {...user.user},
                token: token.token
            });
        } catch (error) {
            if(error == Error) return HttpHelper.BAD_REQUEST(error as Error);
            return error as HttpResponse<Error>;
        }
    }
}

export namespace CreateUserController {
    export type Request = {
      email: string;
      name: string;
      password: string;
    };
  }
  