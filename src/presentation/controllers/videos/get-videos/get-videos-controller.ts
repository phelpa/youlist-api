import { HttpResponse, HttpRequest, Controller, GetVideos } from './get-videos-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import { validationError, serverError, ok } from 'presentation/helpers/http/http-helper'

export class GetVideosController implements Controller {
  constructor (
    private readonly getVideos: GetVideos,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<any> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
  
      const videos = await this.getVideos.get(httpRequest.body)
      return ok({ videos })
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
