import { Input, TextProps } from '@chakra-ui/react'
import React from 'react'
import { FormGridFieldRenderProps } from 'types/FormGridTypes'

export default function InputText({ register, name, ...props }: FormGridFieldRenderProps & TextProps) {
  return <Input type="text" {...register(name)} {...props} />
}
