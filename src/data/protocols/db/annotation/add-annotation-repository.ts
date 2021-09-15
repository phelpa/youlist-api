import { AddAnnotationParams } from 'domain/usecases/annotation/add-annotation'
import { AnnotationModel } from 'domain/models/annotation'

export interface AddAnnotationRepository {
  add: (annotation: AddAnnotationParams) => Promise<AnnotationModel>
}
