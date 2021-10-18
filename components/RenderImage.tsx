import { Image, ImageProps } from '@chakra-ui/react'
import React from 'react'
import { CellRenderProps } from './DataTable'

export default function RenderImage<T, k extends keyof T>({
  val,
  model,
  fieldName,
  ...imageProps
}: CellRenderProps<T, k> & ImageProps) {
  return <Image src={val.toString()} h={24} maxW={'none'} {...imageProps} />
}
