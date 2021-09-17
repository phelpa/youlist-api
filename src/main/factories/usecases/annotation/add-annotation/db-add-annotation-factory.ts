import { AddAnnotation } from 'domain/usecases/annotation/add-annotation'
import { DbAddAnnotation } from 'data/usecases/annotation/add-annotation/db-add-annotation'
import { AnnotationTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/annotation/annotation-typeorm-postgresql-repository'

export const makeDbAddAnnotation = (): AddAnnotation => {
  const annotationTypeOrmPostGreSqlRepository = new AnnotationTypeOrmPostgreSqlRepository()
  return new DbAddAnnotation(annotationTypeOrmPostGreSqlRepository)
}


