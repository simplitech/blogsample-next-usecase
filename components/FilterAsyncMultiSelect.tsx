import { FormControl, FormControlProps, FormLabel } from '@chakra-ui/react'
import React from 'react'
import { FilterFieldRenderProps } from 'types/FilterFormTypes'
import { AsyncSelect } from 'chakra-react-select'

type FilterAsyncMultiSelectProps<T, k extends keyof T> = FilterFieldRenderProps<k> &
  FormControlProps & {
    loadOptions: (search: string) => Promise<ReadonlyArray<{ value: string; label: string }>>
  }

export default function FilterAsyncMultiSelect<T, k extends keyof T>({
  value,
  onChange,
  label,
  fieldName,
  loadOptions,
  ...formControlProps
}: FilterAsyncMultiSelectProps<T, k>) {
  return (
    <FormControl {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      <AsyncSelect
        isMulti={true}
        loadOptions={(search) => loadOptions(search)}
        value={value}
        onChange={(v) => onChange([...v])}
      />
    </FormControl>
  )
}
