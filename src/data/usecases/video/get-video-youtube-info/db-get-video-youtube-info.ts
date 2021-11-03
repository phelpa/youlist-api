import {
  GetVideoYoutubeInfo,
  YoutubeVideo,
  GetVideoYoutubeInfoApi
} from '../../video/get-video-youtube-info/db-get-video-youtube-info-protocols'

export class GetVideoYoutubeInfoFromApi implements GetVideoYoutubeInfo {
  constructor(private readonly youtubeApi: GetVideoYoutubeInfoApi) {}

  async get(youtube_id: string): Promise<YoutubeVideo> {
    const video = await this.youtubeApi.getVideoInfo(youtube_id)
    return video
  }
}
