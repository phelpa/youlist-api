import { VideoModel } from '../../models/video'

export type AddVideoParams = Omit<VideoModel, 'id'>

export interface AddVideo {
  add: (video: AddVideoParams) => Promise<VideoModel>
}
