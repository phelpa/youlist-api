import { AddAnnotation, AddAnnotationParams, AnnotationModel, AddAnnotationRepository } from './db-add-annotation-protocols'

export class DbAddAnnotation implements AddAnnotation {
  constructor (
    private readonly addAnnotationRepository: AddAnnotationRepository,
  ) {}

  async add (annotation: AddAnnotationParams): Promise<AnnotationModel> {
    const addedAnnotation = await this.addAnnotationRepository.add(annotation)
    return addedAnnotation
  }

}