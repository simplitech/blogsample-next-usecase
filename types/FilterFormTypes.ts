import React from 'react'
import { Where, WhereField } from 'helpers/QueryBuilder'

export type FilterController<T> = {
  filters: Where<T>
  addFilter: (field: keyof T | string, val: WhereField<keyof T>) => void
}

export type FilterFieldRenderProps<k> = {
  value: any
  onChange: (val: any) => void
  fieldName?: k | string
  label: string
}

export type FilterRanges<k> = {
  equals?: React.FC<FilterFieldRenderProps<k>>
  in?: React.FC<FilterFieldRenderProps<k>>
  notIn?: React.FC<FilterFieldRenderProps<k>>
  lt?: React.FC<FilterFieldRenderProps<k>>
  lte?: React.FC<FilterFieldRenderProps<k>>
  gt?: React.FC<FilterFieldRenderProps<k>>
  gte?: React.FC<FilterFieldRenderProps<k>>
  not?: React.FC<FilterFieldRenderProps<k>>
}

export type FilterRenderMap<T> = {
  [k in keyof T | string]?: FilterRanges<k>
}
