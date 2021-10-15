import React from 'react'
import { Table, TableProps, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import OrderBy, { OrderController } from './OrderBy'
import useTranslationWithPrefix from '../helpers/useTranslationWithPrefix'

type DataTableProps<T> = TableProps & {
  headersPrefix: string
  controller: OrderController<T> & { list: T[] }
  fields?: RenderMap<T>
}

export type CellRenderProps<T, k extends keyof T> = {
  val: any
  model?: T
  key?: k
}

type FieldRenderMap<T> = {
  [k in keyof T]?: React.FC<CellRenderProps<T, k>>
}

export type RenderMap<T> = FieldRenderMap<T> & {
  [k: string]: React.FC<{ model?: T; key?: any }>
}

export default function DataTable<T>({ headersPrefix, controller, fields, ...tableProps }: DataTableProps<T>) {
  const { tp } = useTranslationWithPrefix(headersPrefix)

  return (
    <Table variant={'striped'} bg={'white'} {...tableProps}>
      <Thead>
        <Tr>
          {Object.keys(fields).map((f) => (
            <Th key={`header.${f}`}>
              <OrderBy controller={controller} fieldname={f as keyof T}>
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
                  <Comp val={p[f]} model={p} key={f} />
                </Td>
              )
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
