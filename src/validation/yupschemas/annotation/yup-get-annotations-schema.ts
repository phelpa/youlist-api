import * as Yup from 'yup'
import { AnnotationModel } from 'domain/models/annotation'

export const YupGetAnnotationsSchema = () =>  {
  const schema: Yup.SchemaOf<AnnotationModel> = Yup.object()
  .noUnknown()
  .shape({
    id: Yup.number().min(1),
    video_id: Yup.number().min(1),
    videotime: Yup.number().min(1),
    text: Yup.string().min(10)
  })
  .strict()

  return schema;
}