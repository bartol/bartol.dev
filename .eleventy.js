module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection('post', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'post'
    })
  })

  eleventyConfig.addFilter('formatDate', function(date) {
    return date.toISOString().substring(0, 10)
  })

  eleventyConfig.addPassthroughCopy("posts");
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
