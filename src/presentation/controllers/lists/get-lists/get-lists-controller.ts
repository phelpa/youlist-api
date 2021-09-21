import { HttpResponse, HttpRequest, Controller, GetLists } from './get-lists-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import { validationError, serverError, ok } from 'presentation/helpers/http/http-helper'

export class GetListsController implements Controller {
  constructor (
    private readonly getLists: GetLists,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<any> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
      console.log('aldair')
  
      const lists = await this.getLists.get(httpRequest.body)
      return ok({ lists })
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
