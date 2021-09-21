import { AnnotationHelper } from '../helpers/annotation-helper'
import { AddAnnotationRepository } from 'data/protocols/db/annotation/add-annotation-repository'
import { GetAnnotationsRepository } from 'data/protocols/db/annotation/get-annotations-repository'
import { AnnotationModel } from 'domain/models/annotation'
import { addAnnotationParams } from 'domain/usecases/annotation/add-annotation'

export class AnnotationTypeOrmPostgreSqlRepository implements AddAnnotationRepository, GetAnnotationsRepository {
  async add (data: addAnnotationParams): Promise<AnnotationModel> {
    const annotation = AnnotationHelper.newAnnotation(data)
    const insertedAnnotation = await annotation.save()
    const mappedAnnotation = AnnotationHelper.mapper(insertedAnnotation)
    return mappedAnnotation
  }

  async get (params: Partial<AnnotationModel>): Promise<AnnotationModel[]> {
    const annotations = await AnnotationHelper.find(params)
    return annotations
  }

}