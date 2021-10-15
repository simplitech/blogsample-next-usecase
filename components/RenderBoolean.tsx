import { useTranslation } from 'react-i18next'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { CellRenderProps } from './DataTable'

export default function RenderBoolean<T, k extends keyof T>({ val }: CellRenderProps<T, k>) {
  const { t } = useTranslation()

  return <Text>{t(`boolean.${val}`)}</Text>
}
