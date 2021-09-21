import { GetVideos } from 'domain/usecases/video/get-videos'
import { DbGetVideos } from 'data/usecases/video/get-videos/db-get-videos';
import { VideoTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/video/video-typeorm-postgresql-repository';

export const makeDbGetVideos = (): GetVideos => {
  const videoTypeOrmPostGreSqlRepository = new VideoTypeOrmPostgreSqlRepository()
  return new DbGetVideos(videoTypeOrmPostGreSqlRepository)
}
