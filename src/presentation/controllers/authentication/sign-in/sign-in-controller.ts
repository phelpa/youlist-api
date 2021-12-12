import {
  HttpResponse,
  HttpRequest,
  Controller,
  SignIn
} from './sign-in-controller-protocols'
import { Validation } from 'presentation/protocols/validation'
import {
  validationError,
  serverError,
  ok
} from 'presentation/helpers/http/http-helper'

export class SignInController implements Controller {
  constructor(
    private readonly auth: SignIn,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return validationError(error)
      }
      const { email, password } = httpRequest.body
      const user = await this.auth.signIn(email, password)
      return ok({ user })
    } catch (error) {
      return serverError(error)
    }
  }
}
