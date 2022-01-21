import { makeValidateToken } from 'main/factories/usecases/authentication/validate-token/validate-token-factory'
import { Middleware } from 'presentation/protocols'
import { AuthMiddleware } from 'presentation/middlewares'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeValidateToken())
}
