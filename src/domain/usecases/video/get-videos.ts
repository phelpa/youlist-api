import { VideoModel } from '../../models/video'

export interface GetVideos {
  get: (params : Partial<VideoModel>) => Promise<VideoModel[]>
}