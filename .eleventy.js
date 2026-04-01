module.exports = function (eleventyConfig) {

  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy("src/css");

  // Custom filter: is this page active?
  eleventyConfig.addFilter("isActive", function (pageUrl, linkUrl) {
    return pageUrl === linkUrl;
  });

  return {
    pathPrefix: "/hippo-assisted-prototyping-guide/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Don't pre-process Markdown files with Nunjucks — content contains {% %} tags
    // that belong to GOV.UK Prototype Kit, not Eleventy
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk"
  };
};
