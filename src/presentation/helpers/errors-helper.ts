import { HttpResponse } from 'presentation/protocols/http'

export const youtubeApiError = (error: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: { message: error.message }
  }
}

export const emailInUseError = (error: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: { message: error.message, errorId: 'EUE_001' }
  }
}

export const invalidCredentialsError = (error: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: { message: error.message, errorId: 'ICE_001' }
  }
}
