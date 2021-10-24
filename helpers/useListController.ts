import { useCallback, useEffect, useState } from 'react'
import { SortOrder } from 'generated/graphql'
import { debounce } from 'lodash'
import { QueryBuilder, QBOptions, Query, Where, WhereField } from './QueryBuilder'

/**
 * creates an object that is responsible to control lists queries on GraphQL, with order, filter and paging capabilities
 * @param opts
 */
export default function useListController<T>(opts: QBOptions<T> = {}) {
  QueryBuilder.fillDefaultOptions(opts)

  // input
  const [search, setSearch] = useState<string | undefined>(undefined)
  const [fieldsToSearch, setFieldsToSearch] = useState<(keyof T | string)[]>(opts.fieldsToSearch)
  const [pageIndex, setPageIndex] = useState(opts.pageIndex)
  const [pageSize, setPageSize] = useState(opts.pageSize)
  const [orderBy, _setOrderBy] = useState<keyof T | string | undefined>(opts.orderBy)
  const [sortOrder, _setSortOrder] = useState<SortOrder | undefined>(opts.sortOrder)
  const [filters, setFilters] = useState<Where<T>>(opts.filters)

  // processed
  const [loading, setLoading] = useState(false)
  const [query, _setQuery] = useState<Query<T>>(opts ? QueryBuilder.build(opts) : {})
  const [pageCount, _setPageCount] = useState(0)

  // content
  const [list, setList] = useState<T[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true)
    buildQuery({
      search,
      fieldsToSearch,
      pageSize,
      pageIndex,
      orderBy,
      sortOrder,
      filters,
    })
  }, [pageIndex])

  useEffect(() => {
    setLoading(true)
    if (pageIndex !== 0) {
      setPageIndex(0)
    } else {
      buildQuery({
        search,
        fieldsToSearch,
        pageSize,
        pageIndex,
        orderBy,
        sortOrder,
        filters,
      })
    }
  }, [search, fieldsToSearch, pageSize, orderBy, sortOrder, filters])

  useEffect(() => {
    _setPageCount(Math.ceil(count / pageSize))
  }, [pageSize, count])

  useEffect(() => {
    setLoading(false)
  }, [list])

  const setOrderBy = (newOrderBy: keyof T, newSortOrder?: SortOrder) => {
    // if no sortOrder is provided it will use Asc unless the orderBy didn't change and sortOrder already is Asc
    _setSortOrder(
      newSortOrder ?? (orderBy !== newOrderBy || sortOrder !== SortOrder.Asc ? SortOrder.Asc : SortOrder.Desc),
    )
    _setOrderBy(newOrderBy)
  }

  const addFilter = (field: keyof T | string, val: WhereField<any>) => {
    setFilters((curFilters) =>
      QueryBuilder.cleanUpFilters({ ...curFilters, [field]: { ...curFilters[field], ...val } }),
    )
  }

  const nextPage = () => {
    if (!hasNext()) return
    setPageIndex((p) => p + 1)
  }

  const prevPage = () => {
    if (!hasPrev()) return
    setPageIndex((p) => p - 1)
  }

  const goToPage = (val: number) => {
    if (val < pageCount && val >= 0) {
      setPageIndex(val)
    }
  }

  const hasNext = () => {
    return pageIndex + 1 < pageCount
  }

  const hasPrev = () => {
    return pageIndex > 0
  }

  const appendList = (newItems: T[]) => {
    setList((oldItems) => [...oldItems, ...newItems])
  }

  const _buildQueryNow = (qbOptions: QBOptions<T>) => {
    _setQuery(QueryBuilder.build<T>(qbOptions))
  }

  const buildQuery = useCallback(debounce(_buildQueryNow, 200), [])

  return {
    search,
    setSearch,
    setFieldsToSearch,
    pageIndex,
    setPageIndex,
    nextPage,
    prevPage,
    hasNext,
    hasPrev,
    goToPage,
    pageSize,
    setPageSize,
    orderBy,
    sortOrder,
    setOrderBy,
    loading,
    setLoading,
    query,
    buildQuery,
    pageCount,
    list,
    setList,
    appendList,
    count,
    setCount,
    filters,
    setFilters,
    addFilter,
  }
}
