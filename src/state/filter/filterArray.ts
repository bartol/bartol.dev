export const filterArray = (array, filters) => {
  const filterKeys = Object.keys(filters)
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true
      return filters[key](item[key])
    })
  })
}
