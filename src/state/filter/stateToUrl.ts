import queryString from 'query-string'

export const stateToUrl = (location = { pathname: '/' }, params) => {
  const { query, category, sort } = params
  const state = {}

  if (query) {
    state.q = query
  }
  if (category) {
    state.category = category
  }
  if (sort !== 'recent') {
    state.sort = sort
  }

  return `${location.pathname}${
    state.q || state.category || state.sort ? '?' : ''
  }${queryString.stringify(state, {
    sort: false,
  })}`
}
