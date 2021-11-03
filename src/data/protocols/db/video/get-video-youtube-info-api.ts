import { YoutubeVideo } from 'domain/models/youtube-video'

export interface GetVideoYoutubeInfoApi {
  getVideoInfo: (youtube_id: string) => Promise<YoutubeVideo>
}
