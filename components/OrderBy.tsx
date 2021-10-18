import React from 'react'
import { LinkProps, Link } from '@chakra-ui/react'
import { SortOrder } from 'generated/graphql'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

export interface OrderController<T> {
  orderBy: keyof T | undefined
  sortOrder: SortOrder | undefined
  setOrderBy: (newOrderBy: keyof T, newSortOrder?: SortOrder) => void
}

type OrderByProps<T> = LinkProps & {
  fieldName: keyof T
  controller: OrderController<T>
}

export default function OrderBy<T>({ controller, fieldName, children, ...igProps }: OrderByProps<T>) {
  return (
    <Link {...igProps} variant={'unstyled'} onClick={() => controller.setOrderBy(fieldName)}>
      {children}
      {controller.orderBy === fieldName &&
        (controller.sortOrder === SortOrder.Asc ? <TriangleUpIcon h={2.5} /> : <TriangleDownIcon h={2.5} />)}
    </Link>
  )
}
