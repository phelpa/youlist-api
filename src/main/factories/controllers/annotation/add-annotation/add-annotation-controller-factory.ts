import { AddAnnotationController } from 'presentation/controllers/annotations/add-annotation/add-annotation-controller'
import { Controller } from 'presentation/protocols'
import { makeDbAddAnnotation } from 'main/factories/usecases/annotation/add-annotation/db-add-annotation-factory'
import { makeAddAnnotationValidation } from './add-annotation-validation-factory'

export const makeAddAnnotationController = (): Controller => {
  const controller = new AddAnnotationController(makeDbAddAnnotation(), makeAddAnnotationValidation())
  return controller
}
