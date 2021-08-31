import { ListModel } from '../../models/list'

export type AddListParams = Omit<ListModel, 'id'>

export interface AddList {
  add: (list: AddListParams) => Promise<ListModel>
}
