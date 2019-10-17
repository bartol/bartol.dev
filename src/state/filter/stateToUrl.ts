import queryString from 'query-string'

export const stateToUrl = (location = { pathname: '/' }, params) => {
  const { query, tags, sort } = params
  const state = {}

  if (query) {
    state.q = query
  }
  if (tags.length) {
    state.tags = tags
  }
  if (sort !== 'recent') {
    state.sort = sort
  }

  return `${location.pathname}${
    state.q || state.tags || state.sort ? '?' : ''
  }${queryString.stringify(state, {
    arrayFormat: 'comma',
    sort: false,
  })}`
}
