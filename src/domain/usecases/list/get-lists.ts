import { ListModel } from '../../models/list'

export interface GetLists {
  get: (params : Partial<ListModel>) => Promise<ListModel[]>
}