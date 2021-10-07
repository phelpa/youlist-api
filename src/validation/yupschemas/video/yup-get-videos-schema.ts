import * as Yup from 'yup'
import { VideoModel } from 'domain/models/video'
interface getVideosSchema extends Omit<VideoModel, 'id' | 'list_id' | 'date'> {
  id: string
  list_id: string
}

export const YupGetVideosSchema = () => {
  const schema: Yup.SchemaOf<getVideosSchema> = Yup.object()
    .noUnknown()
    .shape({
      id: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      title: Yup.string().min(1),
      description: Yup.string().min(1),
      list_id: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      youtube_id: Yup.string().min(10)
    })
    .strict()

  return schema
}
