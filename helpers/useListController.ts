import { useCallback, useEffect, useState } from 'react'
import { SortOrder } from '../generated/graphql'
import { debounce } from 'lodash'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Query<T> {
  // TODO: use T and remove the comment above
  where?: unknown
  orderBy?: unknown[] | null
  take?: number | null
  skip?: number | null
}

interface QBOptions<T> {
  search?: string
  pageSize?: number
  pageIndex?: number
  orderBy?: keyof T
  sortOrder?: SortOrder
}

function staticQueryBuilder<T>(opts: QBOptions<T>): Query<T> {
  const query: Query<T> = {
    take: opts.pageSize,
    skip: opts.pageIndex * opts.pageSize,
  }

  if (opts.orderBy && opts.sortOrder) {
    query.orderBy = [{ [opts.orderBy]: opts.sortOrder }]
  }

  return query
}

/**
 * creates an object that is responsible to control lists queries on GraphQL, with order, filter and paging capabilities
 * @param opts
 */
export default function useListController<T>(opts: QBOptions<T> = {}) {
  opts.pageSize = opts.pageSize ?? 20
  opts.pageIndex = opts.pageIndex ?? 0

  // input
  const [search, setSearch] = useState<string | undefined>(undefined)
  const [pageIndex, setPageIndex] = useState(opts.pageIndex)
  const [pageSize, setPageSize] = useState(opts.pageSize)
  const [orderBy, _setOrderBy] = useState<keyof T | undefined>(opts.orderBy)
  const [sortOrder, _setSortOrder] = useState<SortOrder | undefined>(opts.sortOrder)
  // TODO: filter

  // processed
  const [loading, setLoading] = useState(false)
  const [query, _setQuery] = useState<Query<T>>(opts ? staticQueryBuilder(opts) : {})
  const [pageCount, _setPageCount] = useState(0)

  // content
  const [list, setList] = useState<T[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true)
    buildQuery({
      search,
      pageSize,
      pageIndex,
      orderBy,
      sortOrder,
    })
  }, [search, pageIndex, pageSize, orderBy, sortOrder])

  useEffect(() => {
    _setPageCount(Math.ceil(count / pageSize))
  }, [pageSize, count])

  useEffect(() => {
    setLoading(false)
  }, [list])

  const setOrderBy = (newOrderBy: keyof T, newSortOrder?: SortOrder) => {
    setLoading(true)
    // if no sortOrder is provided it will use Asc unless the orderBy didn't change and sortOrder already is Asc
    _setSortOrder(
      newSortOrder ?? (orderBy !== newOrderBy || sortOrder !== SortOrder.Asc ? SortOrder.Asc : SortOrder.Desc),
    )
    _setOrderBy(newOrderBy)
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
    _setQuery(staticQueryBuilder<T>(qbOptions))
  }

  const buildQuery = useCallback(debounce(_buildQueryNow, 200), [])

  return {
    search,
    setSearch,
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
  }
}
