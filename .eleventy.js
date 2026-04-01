module.exports = function (eleventyConfig) {

  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy("src/css");

  // Custom filter: is this page active?
  eleventyConfig.addFilter("isActive", function (pageUrl, linkUrl) {
    return pageUrl === linkUrl;
  });

  // Render fenced code blocks as .code-block divs so they pick up
  // the navy styling and copy button from the existing CSS/JS
  eleventyConfig.amendLibrary("md", (md) => {
    md.renderer.rules.fence = function (tokens, idx) {
      const token = tokens[idx];
      const escaped = md.utils.escapeHtml(token.content);
      return `<div class="code-block"><code>${escaped}</code></div>\n`;
    };
  });

  return {
    pathPrefix: "/ai-assisted-prototyping-guide/",
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
