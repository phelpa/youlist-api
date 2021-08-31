import { HttpResponse, HttpRequest, Controller, AddList } from './add-list-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import { validationError, serverError, ok } from 'presentation/helpers/http/http-helper'

export class AddListController implements Controller {
  constructor (
    private readonly addList: AddList,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
      const { name, description, category } = httpRequest.body
      const list = await this.addList.add({
        name,
        description,
        category
      })
      return ok({ list })
    } catch (error) {
      return serverError(error)
    }
  }
}
