import { ListModel } from '../../models/list'

export type addListParams = Omit<ListModel, 'id'>

export interface AddList {
  add: (list: addListParams) => Promise<ListModel>
}
