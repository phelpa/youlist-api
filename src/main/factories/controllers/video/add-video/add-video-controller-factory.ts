import { AddVideoController } from 'presentation/controllers/videos/add-video/add-video-controller'
import { Controller } from 'presentation/protocols'
import { makeDbAddVideo } from 'main/factories/usecases/video/add-video/db-add-video-factory'
import { makeAddVideoValidation } from './add-video-validation-factory'

export const makeAddVideoController = (): Controller => {
  const controller = new AddVideoController(makeDbAddVideo(), makeAddVideoValidation())
  return controller
}
