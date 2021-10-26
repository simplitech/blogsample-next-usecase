import { useTranslation } from 'react-i18next'
import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { DataTableCellRenderProps } from 'types/DataTableTypes'

export default function RenderBoolean<T>({
  val,
  model,
  fieldName,
  ...textProps
}: DataTableCellRenderProps<T> & TextProps) {
  const { t } = useTranslation()

  return <Text {...textProps}>{t(`boolean.${val}`)}</Text>
}
