import { AddUserController } from 'presentation/controllers/users/add-user/add-user-controller'
import { Controller } from 'presentation/protocols'
import { makeDbAddUser } from 'main/factories/usecases/user/add-user/db-add-user-factory'
import { makeAddUserValidation } from './add-user-validation-factory'

export const makeAddUserController = (): Controller => {
  const controller = new AddUserController(makeDbAddUser(), makeAddUserValidation())
  return controller
}
