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

  eleventyConfig.addCollection('reading', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'reading'
    })
  })

  // eleventyConfig.addCollection('file', function(collection) {

  // })

  eleventyConfig.addFilter('formatDate', function(date) {
    return date.toISOString().substring(0, 10)
  })

  eleventyConfig.addPassthroughCopy("blog");
  eleventyConfig.addPassthroughCopy("blog.xml");
  eleventyConfig.addPassthroughCopy("til");
  eleventyConfig.addPassthroughCopy("til.xml");
  eleventyConfig.addPassthroughCopy("reading");
  eleventyConfig.addPassthroughCopy("reading.xml");

  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      output: "build",
      layouts: "templates",
      data: "data"
    },
    htmlTemplateEngine: "njk",
  }
};
