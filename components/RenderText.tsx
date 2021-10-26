import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { DataTableCellRenderProps } from 'types/DataTableTypes'

export default function RenderText<T>({
  val,
  model,
  fieldName,
  ...textProps
}: DataTableCellRenderProps<T> & TextProps) {
  return <Text {...textProps}>{val}</Text>
}
