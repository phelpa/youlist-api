export class InvalidCredentialsError extends Error {
  constructor() {
    super('InvalidCredentials')
    this.name = 'InvalidCredentials'
  }
}
