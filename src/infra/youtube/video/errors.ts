export class InvalidYoutubeIdError extends Error {
  constructor() {
    super('Invalid YoutubeId')
    this.name = 'Invalid YoutubeId'
  }
}
