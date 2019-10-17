import queryString from 'query-string'

export const urlToState = (location = { search: '' }) => {
  const parsedUrl = queryString.parse(location.search.slice(1), {
    arrayFormat: 'comma',
  })

  return {
    q: parsedUrl.q || '',
    // eslint-disable-next-line no-nested-ternary
    tags: parsedUrl.tags
      ? Array.isArray(parsedUrl.tags)
        ? parsedUrl.tags
        : [parsedUrl.tags]
      : [],
    sort: parsedUrl.sort || 'recent',
  }
}
