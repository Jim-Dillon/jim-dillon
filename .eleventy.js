module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/JS");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("src/CNAME")
    eleventyConfig.addPassthroughCopy("./src/CSS");
    // eleventyConfig.setBrowserSyncConfig({
    //     open: true,
    //     server: { 
    //         baseDir: '_site', 
    //         serveStaticOptions: { 
    //             baseURL: '/jim-dillon' } 
    //         }
    // });
    return {
        dir: {
            input: "src",
            layouts: "_includes",
            output: "_site",
            // pathPrefix: "/jim-dillon/"
        },
    };
    
};