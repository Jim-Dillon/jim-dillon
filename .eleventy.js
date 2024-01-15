module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/img");
    // eleventyConfig.addPassthroughCopy("./src/CNAME")
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.setBrowserSyncConfig({
        open: true,
        server: { baseDir: '_site', serveStaticOptions: { base: '/jim-dillon' } }
    });
    return {
        dir: {
            input: "src",
            layouts: "_includes",
            output: "_site"
        },
    };
    
};