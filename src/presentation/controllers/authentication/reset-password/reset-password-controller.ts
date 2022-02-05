import {
  HttpResponse,
  HttpRequest,
  Controller,
  ResetPassword
} from './reset-password-controller-protocols'
import { serverError, ok } from 'presentation/helpers/http-helper'

export class ResetPasswordController implements Controller {
  constructor(private readonly auth: ResetPassword) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email } = httpRequest.body
      const user = await this.auth.resetPassword(email)
      return ok({ user })
    } catch (error) {
      return serverError(error)
    }
  }
}
