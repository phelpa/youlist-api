import {
  HttpResponse,
  HttpRequest,
  Controller,
  UpdateAccount
} from './update-account-controller-protocols'
import { serverError, ok } from 'presentation/helpers/http-helper'

export class UpdateAccountController implements Controller {
  constructor(private readonly auth: UpdateAccount) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { token, new_password } = httpRequest.body
      const user = await this.auth.updateAccount(token, { new_password })
      return ok({ user })
    } catch (error) {
      return serverError(error)
    }
  }
}
