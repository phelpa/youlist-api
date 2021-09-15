import { AnnotationModel } from '../../models/annotation'

export type AddAnnotationParams = Omit<AnnotationModel, 'id'>

export interface AddAnnotation {
  add: (annotation: AddAnnotationParams) => Promise<AnnotationModel>
}
