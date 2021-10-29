import _ from 'lodash'

export function formatToUpdate(data, fields: string[]) {
  const result = {}
  ;(fields || Object.keys(data)).forEach((key) => {
    _.set(result, key, { set: _.get(data, key) })
  })
  return result
}

export function formatFromUpdate(dataSet) {
  const result = {}
  Object.keys(dataSet).forEach((key) => {
    _.set(result, key, _.get(dataSet, `${key}.set`))
  })
  return result
}
