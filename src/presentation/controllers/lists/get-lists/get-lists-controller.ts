import {
  HttpResponse,
  HttpRequest,
  Controller,
  GetLists
} from './get-lists-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok
} from 'presentation/helpers/http/http-helper'

export class GetListsController implements Controller {
  constructor(
    private readonly getLists: GetLists,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.query)
      if (error) {
        return validationError(error)
      }

      const lists = await this.getLists.get(httpRequest.query)
      return ok({ lists })
    } catch (error) {
      return serverError(error)
    }
  }
}
