import { Textarea, TextareaProps } from '@chakra-ui/react'
import React from 'react'
import { FormGridFieldRenderProps } from 'types/FormGridTypes'

export default function InputTextarea({ register, name, ...props }: FormGridFieldRenderProps & TextareaProps) {
  return <Textarea {...register(name)} {...props} rows={7} />
}
