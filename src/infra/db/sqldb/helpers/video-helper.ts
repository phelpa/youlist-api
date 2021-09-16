import { Video } from "../entities/typeorm-video-entity"
import { addVideoParams } from 'domain/usecases/video/add-video'
import { VideoModel } from 'domain/models/video'

export const VideoHelper = {

  newVideo (params : addVideoParams): Video {
    const video = new Video()
    video.vid_title = params.title
    video.vid_description = params.description
    video.vid_youtube_id = params.youtube_id
    video.vid_lst_id = params.list_id
    return video
  },

  mapper (video: Video): VideoModel {
    const mappedVideo = {
      id: video.vid_id,
      title: video.vid_title,
      description: video.vid_description,
      youtube_id: video.vid_youtube_id,
      list_id: video.vid_lst_id
    }
    return mappedVideo
  },

  dbMapper (video: VideoModel) {
    const mappedVideo = {
     ...(video.id && {"vid_id": video.id}),
     ...(video.title && {"vid_title": video.title}),
     ...(video.description && {"vid_description": video.description}),
     ...(video.youtube_id && {"vid_youtube_id": video.youtube_id}),
     ...(video.list_id && {"vid_lst_id": video.list_id})
    }
    return mappedVideo
  },

  async find (video: Partial<VideoModel>) : Promise<VideoModel[]> {
    const dbMapped = this.dbMapper(video)
    const videos = await Video.find(dbMapped)
    const modelMappedVideos = videos.map(video => this.mapper(video))
    return modelMappedVideos
  }

}