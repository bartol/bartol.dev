import queryString from 'query-string'

export const urlToState = (location = { search: '' }) => {
  const parsedUrl = queryString.parse(location.search.slice(1))

  return {
    q: parsedUrl.q || '',
    category: parsedUrl.category || '',
    sort: parsedUrl.sort || 'recent',
  }
}
