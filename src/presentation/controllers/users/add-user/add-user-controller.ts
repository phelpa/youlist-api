import {
  HttpResponse,
  HttpRequest,
  Controller,
  AddUser
} from './add-user-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok
} from 'presentation/helpers/http-helper'
import { emailInUseError } from 'presentation/helpers/errors-helper'

export class AddUserController implements Controller {
  constructor(
    private readonly addUser: AddUser,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
      const { name, email, password } = httpRequest.body
      const user = await this.addUser.add({
        name,
        email,
        password
      })
      return ok({ user })
    } catch (error) {
      if (error.name == 'EmailInUseError') {
        return emailInUseError(error)
      }
      return serverError(error)
    }
  }
}
