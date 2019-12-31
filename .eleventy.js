const glob = require('glob')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItMark = require('markdown-it-mark')
const iterator = require('markdown-it-for-inline')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')
const colors = require('./_data/colors.json')

function getLength(collections, collection) {
  // filter out collections that aren't wanted collection or its children
  // filter out parent collection if it has children
  // for each collection get length
  // add all children lengths to parent

  const length = Object.keys(collections)
    .filter(c => {
      if (collection === c) return true

      let match = true
      const collection_split = `${collection}_`.split('')
      const c_split = c.split('')
      collection_split.forEach((_, index) => {
        if (collection_split[index] !== c_split[index]) {
          match = false
        }
      })
      return match
    })
    .filter((c, _, arr) => {
      let match = true
      arr.forEach(item => {
        if (item.startsWith(c + '_')) {
          match = false
        }
      })
      return match
    })
    .map(c => {
      return collections[c].length
    })
    .reduce((a, b) => a + b)

  return length
}

module.exports = function(eleventyConfig) {
  // collections
  const list_pages = glob.sync(
    './!(node_modules|_includes|_data|_site|files)/**/index.md'
  )

  // add root dir to array (it isn't matched by glob)
  list_pages.push('./index.md')

  list_pages.forEach(path => {
    const collectionPath = path.slice(0, -'index.md'.length)
    const collectionName =
      path
        .split('/')
        .slice(1, -1)
        .join('_') || 'root'

    eleventyConfig.addCollection(collectionName, function(collection) {
      // match posts if there are some in directory,
      // if not then match categories below

      return collection.getFilteredByGlob([
        `${collectionPath}/!(index).md`,
        `${collectionPath}/*/index.md`,
      ])
    })
  })

  eleventyConfig.addCollection('posts', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'post'
    })
  })

  // filters
  eleventyConfig.addFilter('toJSON', function(obj) {
    return JSON.stringify(obj)
  })

  eleventyConfig.addFilter('formatDate', function(date, format) {
    if (format === 'dash') return date.toISOString().substring(0, 10)

    return date.getMonth() + 1 + '/' + date.getFullYear()
  })

  eleventyConfig.addFilter('sortList', function(list, sort, collections) {
    if (sort === 'len') {
      return list.sort(function(a, b) {
        const a_len = getLength(collections, a.data.collection)
        const b_len = getLength(collections, b.data.collection)

        if (a_len < b_len) return 1
        if (a_len > b_len) return -1
        return 0
      })
    }

    return list.sort(function(a, b) {
      return b.date - a.date
    })
  })

  eleventyConfig.addFilter('urlToCollection', function(url, layout) {
    if (layout === 'list') {
      return url
        .split('/')
        .slice(1, -1)
        .join('_')
    }
    return url
      .split('/')
      .slice(1, -2)
      .join('_')
  })

  eleventyConfig.addFilter('collectionToCategory', function(collection) {
    return collection.split('_').slice(-1)
  })

  eleventyConfig.addFilter('url_to_breadcrumbs', function(url, collections) {
    const split_url = url.split('/').slice(1, -1)
    const breadcrumbs = split_url.map((_, index) => {
      const url = '/' + split_url.slice(0, index + 1).join('/') + '/'
      const collection = collections.filter(c => c.url === url)[0]
      const title = collection ? collection.data.title : ''

      return {
        title,
        url,
        show_arrow: true,
      }
    })
    breadcrumbs.unshift({ title: 'Home', url: '/', show_arrow: false })

    return breadcrumbs
  })

  // get collection length
  eleventyConfig.addFilter('get_length', function(collections, collection) {
    const length = getLength(collections, collection)
    const plural = length > 1 ? 's' : ''

    return `${length} post${plural}`
  })

  eleventyConfig.addFilter('collection_to_color', function(collection) {
    const match = colors.filter(color => color.name === collection)[0]
    const color = match ? match.value.slice(1) : '19c0e6'

    return color
  })

  // plugins
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['njk', 'md'],
  })

  eleventyConfig.addPlugin(rss)

  // copy files
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('files')

  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('manifest.webmanifest')

  // layout aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('list', 'layouts/list.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

  // deep merge frontmatter data
  eleventyConfig.setDataDeepMerge(true)

  let options = {
    html: true,
    linkify: true,
  }
  let markdownLib = markdownIt(options)
    // open links in new tab
    .use(iterator, 'url_in_new_tab', 'link_open', function(tokens, idx) {
      tokens[idx].attrPush(['target', '_blank'])
      tokens[idx].attrPush(['rel', 'nofollow noopener noreferrer'])
    })
    // add links to headings
    .use(markdownItAnchor, {
      permalink: true,
      slugify: string =>
        string
          .toLowerCase() // convert to lower case
          .replace(/[^\w\s]/g, '') // remove everything that isn't letter or number
          .replace(/[\s_]+/g, '_'), // replace all spaces and low dash
      permalinkBefore: false,
      permalinkClass: 'header_link',
      permalinkSymbol: '#',
      level: [2, 3],
    })
    // marked text
    .use(markdownItMark)

  eleventyConfig.setLibrary('md', markdownLib)

  return {
    dir: { input: '.', output: '_site' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html'],
    htmlTemplateEngine: 'njk',
  }
}
