import { Image, ImageProps } from '@chakra-ui/react'
import React from 'react'
import { DataTableCellRenderProps } from 'types/DataTableTypes'

export default function RenderImage<T, k extends keyof T>({
  val,
  model,
  fieldName,
  ...imageProps
}: DataTableCellRenderProps<T, k> & ImageProps) {
  return <Image src={val.toString()} h={24} maxW={'none'} {...imageProps} />
}
