import { Middleware, HttpResponse } from 'presentation/protocols'
import { forbidden, ok, serverError } from 'presentation/helpers'
import { AccessDeniedError } from 'presentation/errors'
import { ValidateToken } from 'domain/usecases/authentication/auth-validate-token'

export class AuthMiddleware implements Middleware {
  constructor(private readonly auth: ValidateToken) {}

  async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accesstoken } = request

      if (accesstoken) {
        const account = await this.auth.validateToken(accesstoken)

        if (account) {
          return ok(account)
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accesstoken?: string
  }
}
