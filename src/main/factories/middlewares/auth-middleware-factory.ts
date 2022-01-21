import { makeDbLoadAccountByToken } from 'main/factories/usecases/authentication/load-account-by-token/load-account-by-token-factory'
import { Middleware } from 'presentation/protocols'
import { AuthMiddleware } from 'presentation/middlewares'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
