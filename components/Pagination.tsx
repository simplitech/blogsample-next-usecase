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
import { Trans, useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
      <Flex>
        <Tooltip label={t('list.firstPage')}>
          <IconButton
            onClick={() => controller.goToPage(0)}
            isDisabled={!controller.hasPrev()}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
            aria-label={''}
          />
        </Tooltip>
        <Tooltip label={t('list.prevPage')}>
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
          <Trans
            i18nKey={'list.pageIndexOfCount'}
            values={{ index: controller.pageIndex + 1, count: controller.pageCount }}
            components={{ bold: <Text fontWeight="bold" as="span" /> }}
          />
        </Text>
        <Text flexShrink={0}>{t('list.goToPage')}</Text>
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
              {t('list.showNumber', { number: pageSize })}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex>
        <Tooltip label={t('list.nextPage')}>
          <IconButton
            onClick={controller.nextPage}
            isDisabled={!controller.hasNext()}
            icon={<ChevronRightIcon h={6} w={6} />}
            aria-label={''}
          />
        </Tooltip>
        <Tooltip label={t('list.lastPage')}>
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
