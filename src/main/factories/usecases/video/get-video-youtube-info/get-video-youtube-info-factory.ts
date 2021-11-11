import { GetVideoYoutubeInfo } from 'domain/usecases/video/get-video-youtube-info'
import { GetVideoYoutubeInfoFromApi } from 'data/usecases/video/get-video-youtube-info/db-get-video-youtube-info'
import { YoutubeApi } from 'infra/youtube/video/youtube-api'
import { AxiosHttpClient } from 'infra/httpClient/axios-client'
import env from 'main/config/env'

export const makeGetYoutubeInfo = (): GetVideoYoutubeInfo => {
  const httpGetClient = new AxiosHttpClient()
  const youtubeApi = new YoutubeApi(httpGetClient, env.youtubeKey)
  return new GetVideoYoutubeInfoFromApi(youtubeApi)
}
