const htmlmin = require('html-minifier')
const CleanCSS = require('clean-css')
const Terser = require('terser')
const glob = require('glob')
const markdownIt = require('markdown-it')
const iterator = require('markdown-it-for-inline')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')

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

  eleventyConfig.addFilter('formatDate', function(date) {
    return date.getMonth() + 1 + '/' + date.getFullYear()
  })

  eleventyConfig.addFilter('sortList', function(list, sort) {
    if (sort === 'abc') {
      return list.sort(function(a, b) {
        if (a.data.title < b.data.title) return -1
        if (a.data.title > b.data.title) return 1
        return 0
      })
    }

    if (sort === 'custom') {
      return list.sort(function(a, b) {
        return a.data.order - b.data.order
      })
    }

    return list.sort(function(a, b) {
      return b.date - a.date
    })
  })

  eleventyConfig.addFilter('urlToCollection', function(url) {
    return url
      .split('/')
      .slice(1, -2)
      .join('_')
  })

  eleventyConfig.addFilter('collectionToCategory', function(collection) {
    return collection.split('_').slice(-1)
  })

  eleventyConfig.addFilter('getLength', function(collections, collection) {
    // get all collections
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

    const plural = length > 1 ? 's' : ''

    return `${length} post${plural}`
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

  // open links in new tab
  let options = {
    html: true,
    linkify: true,
  }
  let markdownLib = markdownIt(options).use(
    iterator,
    'url_in_new_tab',
    'link_open',
    function(tokens, idx) {
      tokens[idx].attrPush(['target', '_blank'])
      tokens[idx].attrPush(['rel', 'nofollow noopener noreferrer'])
    }
  )

  eleventyConfig.setLibrary('md', markdownLib)

  // minify
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if (process.env.ELEVENTY_PRODUCTION && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })

  eleventyConfig.addFilter('cssmin', function(code) {
    if (process.env.ELEVENTY_PRODUCTION) {
      return new CleanCSS({}).minify(code).styles
    }

    return code
  })

  eleventyConfig.addFilter('jsmin', function(code) {
    if (process.env.ELEVENTY_PRODUCTION) {
      let minified = Terser.minify(code)
      if (minified.error) {
        console.log('Terser error: ', minified.error)
        return code
      }

      return minified.code
    }

    return code
  })

  return {
    dir: { input: '.', output: '_site' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html'],
    htmlTemplateEngine: 'njk',
  }
}
