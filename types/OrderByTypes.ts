import { SortOrder } from 'generated/graphql'

export interface OrderController<T> {
  orderBy: keyof T | string | undefined
  sortOrder: SortOrder | undefined
  setOrderBy: (newOrderBy: keyof T | string, newSortOrder?: SortOrder) => void
}
