import { AddVideo, addVideoParams, VideoModel, AddVideoRepository } from './db-add-video-protocols'

export class DbAddVideo implements AddVideo {
  constructor (
    private readonly addVideoRepository: AddVideoRepository,
  ) {}

  async add (video: addVideoParams): Promise<VideoModel> {
    const addedVideo = await this.addVideoRepository.add(video)
    return addedVideo
  }

}