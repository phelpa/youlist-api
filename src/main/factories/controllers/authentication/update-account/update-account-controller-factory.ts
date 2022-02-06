import { UpdateAccountController } from 'presentation/controllers/authentication/update-account/update-account-controller'
import { Controller } from 'presentation/protocols'
import { makeUpdateAccount } from 'main/factories/usecases/authentication/update-account/update-account-factory'

export const makeUpdateAccountController = (): Controller => {
  const controller = new UpdateAccountController(makeUpdateAccount())
  return controller
}
