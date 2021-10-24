import React from 'react'
import { LinkProps, Link } from '@chakra-ui/react'
import { SortOrder } from 'generated/graphql'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { OrderController } from 'types/OrderByTypes'

type OrderByProps<T> = LinkProps & {
  fieldName: keyof T
  controller: OrderController<T>
}

export default function OrderBy<T>({ controller, fieldName, children, ...igProps }: OrderByProps<T>) {
  return (
    <Link
      {...igProps}
      variant={'unstyled'}
      onClick={() => controller.setOrderBy(fieldName)}
      display={'flex'}
      alignItems={'center'}
      whiteSpace={'nowrap'}
    >
      {children}
      {controller.orderBy === fieldName &&
        (controller.sortOrder === SortOrder.Asc ? (
          <TriangleUpIcon h={2.5} ml={1} />
        ) : (
          <TriangleDownIcon h={2.5} ml={1} />
        ))}
    </Link>
  )
}
