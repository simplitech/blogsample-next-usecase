import { useTranslation } from 'react-i18next'
import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { CellRenderProps } from './DataTable'

export default function RenderBoolean<T, k extends keyof T>({
  val,
  model,
  fieldName,
  ...textProps
}: CellRenderProps<T, k> & TextProps) {
  const { t } = useTranslation()

  return <Text {...textProps}>{t(`boolean.${val}`)}</Text>
}
