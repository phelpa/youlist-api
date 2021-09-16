import { AddAnnotation, addAnnotationParams, AnnotationModel, AddAnnotationRepository } from './db-add-annotation-protocols'

export class DbAddAnnotation implements AddAnnotation {
  constructor (
    private readonly addAnnotationRepository: AddAnnotationRepository,
  ) {}

  async add (annotation: addAnnotationParams): Promise<AnnotationModel> {
    const addedAnnotation = await this.addAnnotationRepository.add(annotation)
    return addedAnnotation
  }

}