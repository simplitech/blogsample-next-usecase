import React from 'react'
import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import { FilterController, FilterRenderMap } from 'types/FilterFormTypes'

type FilterFormProps<T> = {
  labelPrefix: string
  controller: FilterController<T>
  fields?: FilterRenderMap<T>
} & SimpleGridProps

export default function FilterForm<T>({ labelPrefix, controller, fields, ...simpleGridProps }: FilterFormProps<T>) {
  const { tp } = useTranslationWithPrefix(labelPrefix)

  const fieldsKeys = Object.keys(fields ?? {}) as (keyof T)[]

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <SimpleGrid p={3} gap={2} columns={[2, 3, 4]} {...simpleGridProps}>
      {fields &&
        fieldsKeys.map((f) =>
          Object.keys(fields[f] ?? {}).map((ff) => {
            const Comp = (fields[f] ?? {})[ff]
            return (
              <Comp
                key={`${f}.${ff}`}
                fieldName={f}
                label={tp(`${f}${capitalizeFirstLetter(ff)}`)}
                value={controller.filters[f]?.[ff] ?? ''}
                onChange={(val) => controller.addFilter(f, { [ff]: val })}
              />
            )
          }),
        )}
    </SimpleGrid>
  )
}
