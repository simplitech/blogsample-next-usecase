import { SortOrder } from 'generated/graphql'

export interface OrderController<T> {
  orderBy: keyof T | undefined
  sortOrder: SortOrder | undefined
  setOrderBy: (newOrderBy: keyof T, newSortOrder?: SortOrder) => void
}
