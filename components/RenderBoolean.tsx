import { useTranslation } from 'react-i18next'
import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { DataTableCellRenderProps } from 'types/DataTableTypes'

export default function RenderBoolean<T, k extends keyof T>({
  val,
  model,
  fieldName,
  ...textProps
}: DataTableCellRenderProps<T, k> & TextProps) {
  const { t } = useTranslation()

  return <Text {...textProps}>{t(`boolean.${val}`)}</Text>
}
