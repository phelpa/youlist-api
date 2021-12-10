import { ValidateTokenController } from 'presentation/controllers/authentication/validate-token/validate-token-controller'
import { Controller } from 'presentation/protocols'
import { makeValidateToken } from 'main/factories/usecases/authentication/validate-token/validate-token-factory'

export const makeValidateTokenController = (): Controller => {
  const controller = new ValidateTokenController(makeValidateToken())
  return controller
}
