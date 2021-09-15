import { VideoHelper } from '../helpers/video-helper'
import { AddVideoRepository } from 'data/protocols/db/video/add-video-repository'
import { VideoModel } from 'domain/models/video'
import { AddVideoParams } from 'domain/usecases/video/add-video'

export class VideoTypeOrmPostgreSqlRepository implements AddVideoRepository {
  async add (data: AddVideoParams): Promise<VideoModel> {
    const video = VideoHelper.newVideo(data)
    const insertedVideo = await video.save()
    const mappedVideo = VideoHelper.mapper(insertedVideo)
    return mappedVideo
  }

  async get (params: Partial<VideoModel>): Promise<VideoModel[]> {
    const videos = await VideoHelper.find(params)
    return videos
  }

}