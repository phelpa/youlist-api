import * as Yup from 'yup'
import { YoutubeVideo } from 'domain/models/youtube-video'

interface getVideosSchema extends Omit<YoutubeVideo, 'title' | 'description'> {}

export const YupGetYoutubeVideoInfoSchema = () => {
  const schema: Yup.SchemaOf<getVideosSchema> = Yup.object()
    .noUnknown()
    .shape({
      youtube_id: Yup.string().min(10)
    })
    .strict()
  return schema
}
