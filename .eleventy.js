const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')
const CleanCSS = require('clean-css')
const Terser = require('terser')
const glob = require('glob')

module.exports = function(eleventyConfig) {
  // add root collection
  eleventyConfig.addCollection('root', function(collection) {
    return collection
      .getFilteredByGlob('./!(node_modules|_includes|_data|_site|files)/*.md')
      .filter(item => item.inputPath.endsWith('index.md'))
  })

  // add other collections
  const list_pages = glob
    .sync('./!(node_modules|_includes|_data|_site|files)/**/*.md')
    .filter(path => path.endsWith('index.md'))

  console.log(list_pages)

  list_pages.forEach(path => {
    const collectionPath = path.slice(0, -'index.md'.length)
    const collectionName = path
      .split('/')
      .slice(1, -1)
      .join('_')

    eleventyConfig.addCollection(collectionName, function(collection) {
      return collection.getFilteredByGlob(`${collectionPath}/*.md`)
    })
  })

  // filters
  eleventyConfig.addFilter('toJSON', function(obj) {
    return JSON.stringify(obj)
  })

  // syntax highlight
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['njk', 'md'],
  })

  // copy files
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('files')

  // layout aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('list', 'layouts/list.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

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

  eleventyConfig.addFilter('cssmin', function(code) {
    if (process.env.ELEVENTY_PRODUCTION) {
      return new CleanCSS({}).minify(code).styles
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
