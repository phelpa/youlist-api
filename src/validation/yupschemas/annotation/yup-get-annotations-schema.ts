import * as Yup from 'yup'
import { AnnotationModel } from 'domain/models/annotation'

interface getAnnotationsSchema
  extends Omit<
    AnnotationModel,
    'id' | 'text' | 'video_id' | 'videotime' | 'date'
  > {
  id: string
  text: string
  video_id: string
  videotime: string
}

export const YupGetAnnotationsSchema = () => {
  const schema: Yup.SchemaOf<getAnnotationsSchema> = Yup.object()
    .noUnknown()
    .shape({
      id: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      video_id: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      videotime: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      text: Yup.string().min(10)
    })
    .strict()

  return schema
}
