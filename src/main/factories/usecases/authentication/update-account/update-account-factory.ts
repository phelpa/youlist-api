import { AuthUpdateAccount } from 'data/usecases/authentication/update-account/auth-update-account'
import { Authentication } from 'infra/auth/authentication'

export const makeUpdateAccount = (): AuthUpdateAccount => {
  const auth = new Authentication()
  return new AuthUpdateAccount(auth)
}
