module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/JS");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("src/CNAME")
    eleventyConfig.addPassthroughCopy("./src/CSS");
    return {
        dir: {
            input: "src",
            layouts: "_includes",
            output: "_site",
        },
    };
    
};