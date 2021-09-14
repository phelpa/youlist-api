import { AddListController } from 'presentation/controllers/lists/add-list/add-list-controller'
import { Controller } from 'presentation/protocols'
import { makeDbAddList } from 'main/factories/usecases/list/add-list/db-add-list-factory'
import { makeAddListValidation } from './add-list-validation-factory'

export const makeAddListController = (): Controller => {
  const controller = new AddListController(makeDbAddList(), makeAddListValidation())
  return controller
}
