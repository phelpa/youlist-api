import { addListParams } from 'domain/usecases/list/add-list'
import { ListModel } from 'domain/models/list'

export interface AddListRepository {
  add: (list: addListParams) => Promise<ListModel>
}
