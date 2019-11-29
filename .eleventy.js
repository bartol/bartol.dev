const { readdirSync } = require('fs')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')
const CleanCSS = require('clean-css')
const Terser = require('terser')

module.exports = function(eleventyConfig) {
  const excluded_directories = [
    'node_modules',
    '.git',
    'js',
    'css',
    'fonts',
    'img',
  ]

  // source collections
  function getAllCollections(dir) {
    const content = readdirSync(dir, { withFileTypes: true })
      .filter(
        dir =>
          dir.isDirectory() &&
          !dir.name.startsWith('_') &&
          !excluded_directories.includes(dir.name)
      )
      .map(dirent => dirent.name)

    if (content.length) {
      collections.push({
        path: dir,
        name:
          dir
            .split('/')
            .slice(1)
            .join('_') || 'root',
        content: content.map(e => dir + '/' + e),
      })
      content.forEach(path => {
        getAllCollections(dir + '/' + path)
      })
    }
  }

  const collections = []
  getAllCollections('.')

  collections.forEach(collection => {
    const { name, content } = collection

    eleventyConfig.addCollection(name, function(collection) {
      return collection.getAll().filter(function(item) {
        const itemPath = item.inputPath
          .split('/')
          .slice(0, -1)
          .join('/')
        return content.includes(itemPath)
      })
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
