import { VideoModel } from '../../models/video'

export type addVideoParams = Omit<VideoModel, 'id' | 'date'>

export interface AddVideo {
  add: (video: addVideoParams) => Promise<VideoModel>
}
