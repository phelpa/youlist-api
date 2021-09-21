import { VideoModel } from 'domain/models/video'

export interface GetVideosRepository {
  get: (params: Partial<VideoModel>) => Promise<VideoModel[]>
}
