const glob = require('glob')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItMark = require('markdown-it-mark')
const iterator = require('markdown-it-for-inline')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')
const colors = require('./_data/colors.json')

function get_collection_length(all_collections, collection) {
  const len = Object.keys(all_collections)
    // get all collections and its children
    .filter(c => {
      return c === collection || c.startsWith(`${collection}_`)
    })
    // get children length
    .map(c => {
      const len = all_collections[c].length
      // if child is parent itself only return its children lenght
      if (len && c !== collection) return len - 1
      return len
    })

  if (len.length) {
    // add all children lengths to parent
    return len.reduce((a, b) => a + b)
  }
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

  eleventyConfig.addCollection('drafts', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.draft
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

  eleventyConfig.addFilter('sort_list', function(list, all_collections) {
    if (!list || list.length < 2) return list

    return list.sort(function(a, b) {
      if (a.data.collection && b.data.collection) {
        const a_len = get_collection_length(all_collections, a.data.collection)
        const b_len = get_collection_length(all_collections, b.data.collection)

        if (typeof a_len === 'number' && typeof b_len === 'number') {
          if (a_len < b_len) return 1
          if (a_len > b_len) return -1
        }
        if (a.data.collection > b.data.collection) return 1
        if (a.data.collection < b.data.collection) return -1
      }
      if (a.date && b.date) {
        return b.date - a.date
      }
      if (a.data.date && b.data.date) {
        return b.data.date - a.data.date
      }
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
  eleventyConfig.addFilter('get_length', function(all_collections, collection) {
    const length = get_collection_length(all_collections, collection)
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
  eleventyConfig.addPassthroughCopy('_redirects')

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
