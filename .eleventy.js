module.exports = function(eleventyConfig) {

  return {
    dir: { input: '.', output: '_site', },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
