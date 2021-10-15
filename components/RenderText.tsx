import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { CellRenderProps } from './DataTable'

export default function RenderText<T, k extends keyof T>({
  val,
  model,
  key,
  ...textProps
}: CellRenderProps<T, k> & TextProps) {
  return <Text {...textProps}>{val}</Text>
}
