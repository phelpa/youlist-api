import { AddListParams } from 'domain/usecases/list/add-list'
import { ListModel } from 'domain/models/list'

export interface AddListRepository {
  add: (list: AddListParams) => Promise<ListModel>
}
