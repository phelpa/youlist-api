import {
  HttpResponse,
  HttpRequest,
  Controller,
  ValidateToken
} from './validate-token-controller-protocols'
import { serverError, ok } from 'presentation/helpers/http/http-helper'

export class ValidateTokenController implements Controller {
  constructor(private readonly auth: ValidateToken) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { token } = httpRequest.body
      const user = await this.auth.validateToken(token)
      return ok({ user })
    } catch (error) {
      return serverError(error)
    }
  }
}
