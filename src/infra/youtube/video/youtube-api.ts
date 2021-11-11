import { GetVideoYoutubeInfoApi } from 'data/protocols/db/video/get-video-youtube-info-api'
import { YoutubeVideo } from 'domain/models/youtube-video'
import { HttpGetClient } from 'infra/httpClient/protocols/http-get-client'
import { YoutubeResponse } from './protocols'

export class YoutubeApi implements GetVideoYoutubeInfoApi {
  private readonly baseUrl = 'https://www.googleapis.com/youtube/v3'

  constructor(
    private readonly httpClient: HttpGetClient,
    private readonly youtubeSecret: string
  ) {}

  async getVideoInfo(youtube_id: string): Promise<YoutubeVideo> {
    const url = this.concatenateYoutubeIdToUrl(youtube_id)
    const response = await this.httpClient.get<YoutubeResponse>(url)

    const video = {
      youtube_id: response.items[0].id,
      title: response.items[0].snippet.title,
      description: response.items[0].snippet.description
    }

    return video
  }

  private concatenateYoutubeIdToUrl(youtube_id) {
    const key = `&key=${this.youtubeSecret}`
    const url = `${this.baseUrl}/videos?part=id%2C+snippet&id=${youtube_id}`
    return url + key
  }
}
