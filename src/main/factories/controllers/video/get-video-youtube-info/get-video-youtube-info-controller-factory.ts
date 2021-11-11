import { GetVideoYoutubeInfoController } from 'presentation/controllers/videos/get-video-youtube-info/get-video-youtube-info-controller'
import { Controller } from 'presentation/protocols'
import { makeGetYoutubeInfo } from 'main/factories/usecases/video/get-video-youtube-info/get-video-youtube-info-factory'
import { makeGetVideoYoutubeInfoValidation } from './get-video-youtube-info-validation-factory'

export const makeGetVideoYoutubeInfoController = (): Controller => {
  const controller = new GetVideoYoutubeInfoController(
    makeGetYoutubeInfo(),
    makeGetVideoYoutubeInfoValidation()
  )
  return controller
}
