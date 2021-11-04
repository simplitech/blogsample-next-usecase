import { SortOrder } from 'generated/graphql'

export abstract class QueryBuilder {
  static build<T>(opts: QBOptions<T>): Query<T> {
    this.fillDefaultOptions(opts)

    const query: Query<T> = {
      take: opts.pageSize,
      skip: (opts.pageIndex ?? 0) * (opts.pageSize ?? 0),
    }

    if (opts.orderBy && opts.sortOrder) {
      query.orderBy = [this.buildNestedOrderBy(opts.orderBy, opts.sortOrder)]
    }

    if (opts.fieldsToSearch?.length && opts.search?.length) {
      const or: Where<T>[] = []
      opts.fieldsToSearch.forEach((field) => {
        or.push(this.buildNestedFilter(field, { contains: opts.search }))
      })
      // @ts-ignore
      query.where = { OR: or } // WHERE has this special field called 'OR' but we can't put it on the type
    }

    query.where = { ...query.where, ...this.convertFilters(opts.filters ?? {}) }

    return query
  }

  static fillDefaultOptions<T>(opts: QBOptions<T>) {
    opts.pageSize = opts.pageSize ?? 20
    opts.pageIndex = opts.pageIndex ?? 0
    opts.fieldsToSearch = opts.fieldsToSearch ?? []
    opts.filters = opts.filters ?? {}
  }

  static buildNestedFilter<T>(field: keyof T | string, value: WhereField<keyof T>) {
    const result: Where<T> = {}
    let cursor = result
    const subfields = (field as string).split('.') as (keyof T)[]
    subfields.forEach((sub, index) => {
      if (index < subfields.length - 1) {
        cursor[sub] = { is: {} }
        cursor = cursor[sub]?.is ?? {}
      } else {
        cursor[sub] = value
      }
    })
    return result
  }

  static buildNestedOrderBy<T>(field: keyof T | string, sortOrder: SortOrder) {
    const result: any = {}
    let cursor = result
    const subfields = (field as string).split('.') as (keyof T)[]
    subfields.forEach((sub, index) => {
      if (index < subfields.length - 1) {
        cursor[sub] = {}
        cursor = cursor[sub]
      } else {
        cursor[sub] = sortOrder
      }
    })
    return result
  }

  static cleanUpFilters<T>(filters: Where<T>) {
    Object.keys(filters).forEach((fkey) => {
      const f = filters[fkey]
      if (f) {
        if (f.equals === null || f.equals === '') f.equals = undefined
        if (f.in === null || !f.in?.length) f.in = undefined
        if (f.notIn === null || !f.notIn?.length) f.notIn = undefined
        if (f.lt === null || f.lt === '') f.lt = undefined
        if (f.lte === null || f.lte === '') f.lte = undefined
        if (f.gt === null || f.gt === '') f.gt = undefined
        if (f.gte === null || f.gte === '') f.gte = undefined
        if (f.not === null || f.not === '') f.not = undefined
      }
    })

    return filters
  }

  static convertFilters<T>(filters: Where<T>) {
    const newFilter: Where<T> = {}
    ;(Object.keys(filters) as (keyof T)[]).forEach((fkey) => {
      const f = { ...filters[fkey] }
      if (f) {
        if (f.in) {
          f.in = f.in.map((i) => (typeof i === 'object' ? i.value : i))
        }
        if (f.notIn) {
          f.notIn = f.notIn.map((i) => (typeof i === 'object' ? i.value : i))
        }
      }
      newFilter[fkey] = f
    })
    return newFilter
  }
}

export interface QBOptions<T> {
  search?: string
  fieldsToSearch?: (keyof T | string)[]
  pageSize?: number
  pageIndex?: number
  orderBy?: keyof T | string
  sortOrder?: SortOrder
  filters?: Where<T>
}

type QueryOrderBy<T> = {
  [k in keyof T]?: any // SortOrder
}

export type Query<T> = {
  where?: Where<T>
  orderBy?: QueryOrderBy<T>[] | null
  take?: number | null
  skip?: number | null
}

export interface WhereField<T> {
  equals?: string | number | boolean
  in?: (string | number | { value: string | number })[]
  notIn?: (string | number | { value: string | number })[]
  lt?: string | number
  lte?: string | number
  gt?: string | number
  gte?: string | number
  not?: string | number | boolean
  is?: Where<T>
  contains?: string
}

export type Where<T> = {
  [k in keyof T | string]?: WhereField<any>
  // OR?: Where<T>[]
}
