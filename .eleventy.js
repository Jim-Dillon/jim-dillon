module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    // eleventyConfig.addPassthroughCopy("./src/CNAME")
    eleventyConfig.addPassthroughCopy("src/css");
    return {
        dir: {
            input: "src",
            layouts: "_includes",
            output: "_site"
        },
    };
};