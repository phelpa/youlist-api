import { GetAnnotationsController } from 'presentation/controllers/annotations/get-annotations/get-annotations-controller'
import { Controller } from 'presentation/protocols'
import { makeDbGetAnnotations } from 'main/factories/usecases/annotation/get-annotations/db-get-annotations-factory'
import { makeGetAnnotationsValidation } from './get-annotations-validation-factory'

export const makeGetAnnotationsController = (): Controller => {
  const controller = new GetAnnotationsController(makeDbGetAnnotations(), makeGetAnnotationsValidation())
  return controller
}
