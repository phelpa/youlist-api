import {
  HttpResponse,
  HttpRequest,
  Controller,
  GetAnnotations
} from './get-annotations-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok
} from 'presentation/helpers/http/http-helper'

export class GetAnnotationsController implements Controller {
  constructor(
    private readonly getAnnotations: GetAnnotations,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.query)
      if (error) {
        return validationError(error)
      }

      const annotations = await this.getAnnotations.get(httpRequest.query)
      return ok({ annotations })
    } catch (error) {
      return serverError(error)
    }
  }
}
