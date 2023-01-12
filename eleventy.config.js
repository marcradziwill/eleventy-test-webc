const glob = require('fast-glob');
const path = require('path');

const { EleventyRenderPlugin } = require("@11ty/eleventy");
const webcPlugin = require('@11ty/eleventy-plugin-webc');

const config = {
    dir: {
        input: 'src',
        output: '_site',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
}

module.exports = function (eleventyConfig) {

    // Plugins
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(webcPlugin, {
		components: "src/_includes/components/webc/**/*.webc",
	});
    
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

    return config;
};