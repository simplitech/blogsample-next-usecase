import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { DataTableCellRenderProps } from 'types/DataTableTypes'

export default function RenderText<T, k extends keyof T>({
  val,
  model,
  fieldName,
  ...textProps
}: DataTableCellRenderProps<T, k> & TextProps) {
  return <Text {...textProps}>{val}</Text>
}
