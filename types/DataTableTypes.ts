import React from 'react'

export type DataTableCellRenderProps<T, k extends keyof T> = {
  val: any
  model?: T
  fieldName?: k
}

export type DataTableFieldRenderMap<T> = {
  [k in keyof T]?: React.FC<DataTableCellRenderProps<T, k>>
}

export type DataTableRenderMap<T> = DataTableFieldRenderMap<T> & {
  [k: string]: React.FC<{ model?: T; fieldName?: any }>
}
