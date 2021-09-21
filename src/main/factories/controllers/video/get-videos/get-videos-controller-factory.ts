import { GetVideosController } from 'presentation/controllers/videos/get-videos/get-videos-controller'
import { Controller } from 'presentation/protocols'
import { makeDbGetVideos } from 'main/factories/usecases/video/get-videos/db-get-videos-factory'
import { makeGetVideosValidation } from './get-videos-validation-factory'

export const makeGetVideosController = (): Controller => {
  const controller = new GetVideosController(makeDbGetVideos(), makeGetVideosValidation())
  return controller
}
