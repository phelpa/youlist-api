import { AddVideoParams } from 'domain/usecases/video/add-video'
import { VideoModel } from 'domain/models/video'

export interface AddVideoRepository {
  add: (video: AddVideoParams) => Promise<VideoModel>
}
