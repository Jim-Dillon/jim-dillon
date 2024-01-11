module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");
    // eleventyConfig.addPassthroughCopy("./src/CNAME")
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            layouts: "_includes",
        },
    }
}