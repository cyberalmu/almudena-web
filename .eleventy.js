const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/static");

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("es")
      .toFormat("d 'de' LLLL, yyyy");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  // Excerpt filter — first paragraph
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";
    const match = content.match(/<p>(.*?)<\/p>/s);
    return match ? match[1] : content.substring(0, 200);
  });

  // Collection: blog posts sorted by date
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
