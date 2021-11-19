import { AddList } from 'domain/usecases/list/add-list'
import { DbAddList } from 'data/usecases/list/add-list/db-add-list'
import { ListTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/list/list-typeorm-postgresql-repository'
import { YoutubeApi } from 'infra/youtube/video/youtube-api'
import { AxiosHttpClient } from 'infra/httpClient/axios-client'
import env from 'main/config/env'

export const makeDbAddList = (): AddList => {
  const httpGetClient = new AxiosHttpClient()
  const youtubeApi = new YoutubeApi(httpGetClient, env.youtubeKey)
  const listTypeOrmPostGreSqlRepository = new ListTypeOrmPostgreSqlRepository(
    youtubeApi
  )
  return new DbAddList(listTypeOrmPostGreSqlRepository)
}
