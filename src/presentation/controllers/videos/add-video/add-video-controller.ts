import {
  HttpResponse,
  HttpRequest,
  Controller,
  AddVideo
} from './add-video-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok
} from 'presentation/helpers/http-helper'

export class AddVideoController implements Controller {
  constructor(
    private readonly addVideo: AddVideo,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
      const { title, description, list_id, youtube_id } = httpRequest.body
      const video = await this.addVideo.add({
        title,
        description,
        list_id,
        youtube_id
      })
      return ok({ video })
    } catch (error) {
      return serverError(error)
    }
  }
}
