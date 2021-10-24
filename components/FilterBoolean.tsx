import { FormControl, FormControlProps, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import { FilterFieldRenderProps } from 'types/FilterFormTypes'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'

export default function FilterBoolean<T, k extends keyof T>({
  value,
  onChange,
  label,
  fieldName,
  optionsPrefix = 'boolean',
  ...formControlProps
}: FilterFieldRenderProps<k> & FormControlProps & { optionsPrefix: string }) {
  const { tp } = useTranslationWithPrefix(optionsPrefix)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    onChange(val === 'true' ? true : val === 'false' ? false : null)
  }

  const asOptionValue = () => {
    return value === true ? 'true' : value === false ? 'false' : 'null'
  }

  return (
    <FormControl {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      <Select value={asOptionValue()} onChange={handleChange}>
        <option value={'null'}>{tp('null')}</option>
        <option value={'true'}>{tp('true')}</option>
        <option value={'false'}>{tp('false')}</option>
      </Select>
    </FormControl>
  )
}
