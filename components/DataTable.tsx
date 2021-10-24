import React from 'react'
import { Table, TableProps, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import OrderBy from './OrderBy'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import { DataTableRenderMap } from 'types/DataTableTypes'
import { OrderController } from 'types/OrderByTypes'
import _ from 'lodash'

type DataTableProps<T> = TableProps & {
  headersPrefix: string
  controller: OrderController<T> & { list: T[] }
  fields?: DataTableRenderMap<T>
}

export default function DataTable<T>({ headersPrefix, controller, fields, ...tableProps }: DataTableProps<T>) {
  const { tp } = useTranslationWithPrefix(headersPrefix)

  return (
    <Table variant={'striped'} bg={useColorModeValue('white', 'gray.800')} {...tableProps}>
      <Thead>
        <Tr>
          {Object.keys(fields).map((f) => (
            <Th key={`header.${f}`}>
              <OrderBy controller={controller} fieldName={f as keyof T}>
                {tp(f as string)}
              </OrderBy>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {controller.list.map((p, i) => (
          <Tr key={`row.${i}`}>
            {Object.keys(fields).map((f) => {
              const Comp: any = fields[f]
              return (
                <Td key={`cell.${i}.${f}`}>
                  <Comp val={_.get(p, f)} model={p} fieldName={f} />
                </Td>
              )
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
