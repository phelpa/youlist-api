import { YoutubeVideo } from '../../models/youtube-video'

export interface GetVideoYoutubeInfo {
  get: (youtube_id: string) => Promise<YoutubeVideo>
}
