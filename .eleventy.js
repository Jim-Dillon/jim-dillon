module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");
    // eleventyConfig.addPassthroughCopy("./src/CNAME")
    // eleventyConfig.setBrowserSyncConfig({
    //     server: {
    //         baseDir: "_site",
    //         serverStaticOptions: {
    //             base: "/jim-dillon/",
    //         },
    //     },
    // });
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            input: "src",
            layouts: "_includes",
        },
    };
};