import {
  HttpResponse,
  HttpRequest,
  Controller,
  AddAnnotation
} from './add-annotation-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok
} from 'presentation/helpers/http-helper'

export class AddAnnotationController implements Controller {
  constructor(
    private readonly addAnnotation: AddAnnotation,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
      const { video_id, videotime, text } = httpRequest.body
      const annotation = await this.addAnnotation.add({
        video_id,
        videotime,
        text
      })
      return ok({ annotation })
    } catch (error) {
      return serverError(error)
    }
  }
}
