import React from 'react'
import {
  Flex,
  FlexProps,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type PaginationProps = FlexProps & {
  controller: {
    pageIndex: number
    pageSize: number
    pageCount: number
    hasNext: () => boolean
    hasPrev: () => boolean
    nextPage: () => void
    prevPage: () => void
    goToPage: (val: number) => void
    setPageSize: (val: number) => void
  }
}

const Pagination: React.FC<PaginationProps> = ({ controller, ...flexProps }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            onClick={() => controller.goToPage(0)}
            isDisabled={!controller.hasPrev()}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
            aria-label={''}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => controller.prevPage()}
            isDisabled={!controller.hasPrev()}
            icon={<ChevronLeftIcon h={6} w={6} />}
            aria-label={''}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center">
        <Text flexShrink={0} mr={8}>
          Page{' '}
          <Text fontWeight="bold" as="span">
            {controller.pageIndex + 1}
          </Text>{' '}
          of{' '}
          <Text fontWeight="bold" as="span">
            {controller.pageCount}
          </Text>
        </Text>
        <Text flexShrink={0}>Go to page:</Text>{' '}
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          max={controller.pageCount}
          onChange={(value) => {
            controller.goToPage(Number(value) - 1)
          }}
          defaultValue={controller.pageIndex + 1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          value={controller.pageSize}
          onChange={(e) => {
            controller.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            onClick={controller.nextPage}
            isDisabled={!controller.hasNext()}
            icon={<ChevronRightIcon h={6} w={6} />}
            aria-label={''}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => controller.goToPage(controller.pageCount - 1)}
            isDisabled={!controller.hasNext()}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
            aria-label={''}
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
}

export default Pagination
