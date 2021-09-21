import { VideoModel, GetVideos, GetVideosRepository } from '../../video/get-videos/db-get-videos-protocols'

export class DbGetVideos implements GetVideos {
  constructor (
    private readonly getVideosRepository: GetVideosRepository,
  ) {}

  async get (params: Partial<VideoModel>): Promise<VideoModel[]> {
    const videos = await this.getVideosRepository.get(params)
    return videos
  }

}