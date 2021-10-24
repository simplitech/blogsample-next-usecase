import { FormControl, FormControlProps, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { FilterFieldRenderProps } from 'types/FilterFormTypes'

export default function FilterDatetime<T, k extends keyof T>({
  value,
  onChange,
  label,
  fieldName,
  ...formControlProps
}: FilterFieldRenderProps<k> & FormControlProps) {
  return (
    <FormControl {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      <Input type="datetime-local" value={value} onChange={(e) => onChange(e.target.value)} />
    </FormControl>
  )
}
