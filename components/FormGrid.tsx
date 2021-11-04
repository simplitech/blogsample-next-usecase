import { FormControl, FormErrorMessage, FormLabel, Button, SimpleGrid, Flex, GridItem } from '@chakra-ui/react'
import React from 'react'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { FormGridColspanMap, FormGridRenderMap } from 'types/FormGridTypes'
import { UseFormSetError } from 'react-hook-form/dist/types/form'
import { formatToUpdate } from '../helpers/prismaUpdateFormatter'

type FormGridProps<T> = {
  defaultValues?: any
  validator: Yup.AnyObjectSchema
  fieldsPrefix: string
  saving?: boolean
  onSubmit: (data, setError: UseFormSetError<T>) => void
  fields?: FormGridRenderMap<T>
  colSpans?: FormGridColspanMap<T>
}

export default function FormGrid<T>({
  defaultValues,
  validator,
  fieldsPrefix,
  saving,
  onSubmit,
  fields,
  colSpans,
}: FormGridProps<T>) {
  const { tp, t } = useTranslationWithPrefix(fieldsPrefix)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validator),
  })

  const submit = async (data) => {
    onSubmit(defaultValues ? formatToUpdate(data, Object.keys(fields ?? {})) : data, setError)
  }

  return (
    <Flex direction={'column'} as={'form'} onSubmit={handleSubmit(submit)} p={3}>
      <SimpleGrid gap={2} columns={[1, 2]} mb={4}>
        {Object.keys(fields ?? {}).map((f) => {
          const Comp: any = (fields ?? {})[f]
          return (
            <GridItem key={`field.${f}`} colSpan={colSpans?.[f]}>
              <FormControl isInvalid={!!errors[f]}>
                <FormLabel>{tp(f)}</FormLabel>
                <Comp register={register} name={f} />
                <FormErrorMessage>{errors[f] && errors[f].message}</FormErrorMessage>
              </FormControl>
            </GridItem>
          )
        })}
      </SimpleGrid>
      <Button type="submit" isLoading={saving} colorScheme={'brand'} alignSelf={'center'}>
        {t('action.submit')}
      </Button>
    </Flex>
  )
}
