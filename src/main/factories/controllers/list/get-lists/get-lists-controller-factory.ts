import { GetListsController } from 'presentation/controllers/lists/get-lists/get-lists-controller'
import { Controller } from 'presentation/protocols'
import { makeDbGetLists } from 'main/factories/usecases/list/get-lists/db-get-lists-factory'
import { makeGetListsValidation } from './get-lists-validation-factory'

export const makeGetListsController = (): Controller => {
  const controller = new GetListsController(makeDbGetLists(), makeGetListsValidation())
  return controller
}
