import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { CellRenderProps } from './DataTable'

export default function RenderDatetime<T, k extends keyof T>({
  val,
  model,
  fieldName,
  ...textProps
}: CellRenderProps<T, k> & TextProps) {
  return <Text {...textProps}>{new Date(val.toString()).toLocaleString()}</Text>
}
