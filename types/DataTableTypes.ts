import React from 'react'

export type DataTableCellRenderProps<T> = {
  val?: any
  model?: T
  fieldName?: any
}

export type DataTableRenderMap<T> = {
  [k in keyof T | string]?: React.FC<DataTableCellRenderProps<T>>
}
