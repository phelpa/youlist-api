import { AuthResetPassword } from 'data/usecases/authentication/reset-password/auth-reset-password'
import { Authentication } from 'infra/auth/authentication'

export const makeResetPassword = (): AuthResetPassword => {
  const auth = new Authentication()
  return new AuthResetPassword(auth)
}
