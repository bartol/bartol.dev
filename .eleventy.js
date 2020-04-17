module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection('blog', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'blog'
    })
  })

  eleventyConfig.addCollection('til', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'til'
    })
  })

  // eleventyConfig.addCollection('file', function(collection) {

  // })

  eleventyConfig.addFilter('formatDate', function(date) {
    return date.toISOString().substring(0, 10)
  })

  eleventyConfig.addPassthroughCopy("posts");
  eleventyConfig.addPassthroughCopy("til");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      output: "build",
      layouts: "templates",
    },
    htmlTemplateEngine: "njk",
  }
};
