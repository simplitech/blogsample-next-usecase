import React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { Path } from 'react-hook-form'

export type FormGridFieldRenderProps = {
  register: UseFormRegister<any>
  name: Path<any>
}

export type FormGridRenderMap<T> = {
  [k in keyof T | string]?: React.FC<FormGridFieldRenderProps>
}

export type FormGridColspanMap<T> = {
  [k in keyof T | string]?: number
}
