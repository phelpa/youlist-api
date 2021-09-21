import { ListModel } from 'domain/models/list'

export interface GetListsRepository {
  get: (params: Partial<ListModel>) => Promise<ListModel[]>
}
