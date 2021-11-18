import {
  HttpResponse,
  HttpRequest,
  Controller,
  GetVideoYoutubeInfo
} from './get-video-youtube-info-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok,
  youtubeApiError
} from 'presentation/helpers/http/http-helper'

export class GetVideoYoutubeInfoController implements Controller {
  constructor(
    private readonly videoYoutubeInfo: GetVideoYoutubeInfo,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.query)
      if (error) {
        return validationError(error)
      }

      const video = await this.videoYoutubeInfo.get(
        httpRequest.query.youtube_id
      )
      return ok({ video })
    } catch (error) {
      if (error.name == 'Invalid YoutubeId') {
        return youtubeApiError(error)
      }
      return serverError(error)
    }
  }
}
