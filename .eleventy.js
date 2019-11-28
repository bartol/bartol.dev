const { readdirSync } = require('fs')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function(eleventyConfig) {
  const excluded_directories = ['node_modules', 'js', 'css', 'fonts']
  // source collections
  function getAllCollections(dir) {
    const content = readdirSync(dir, { withFileTypes: true })
      .filter(
        dir =>
          dir.isDirectory() &&
          !excluded_directories.contain(dir.name) &&
          !dir.name.startsWith('_') &&
          !dir.name.startsWith('.')
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

  // syntax highlight
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['njk', 'md'],
  })

  // layout aliases
  eleventyConfig.addLayoutAlias('global', 'global.njk')

  console.log(process.env.ELEVENTY_ENV)

  return {
    dir: { input: '.', output: '_site', includes: '_includes' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html'],
    htmlTemplateEngine: 'njk',
  }
}
