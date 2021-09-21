import * as Yup from 'yup'
import { VideoModel } from 'domain/models/video'

export const YupGetVideosSchema = () =>  {
  const schema: Yup.SchemaOf<VideoModel> = Yup.object()
  .noUnknown()
  .shape({
    id: Yup.number().min(1),
    title: Yup.string().min(1),
    description: Yup.string().min(1),
    list_id: Yup.number().min(1),
    youtube_id: Yup.string().min(10)
  })
  .strict()

  return schema;
}