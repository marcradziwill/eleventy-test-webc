const { EleventyRenderPlugin } = require("@11ty/eleventy");
const i18nPlugin = require('eleventy-plugin-i18n');
const webcPlugin = require('@11ty/eleventy-plugin-webc');
const translations = require('./src/_data/i18n/translations');

const config = {
    dir: {
        input: 'src',
        // assets: 'assets',
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
    eleventyConfig.addPlugin(i18nPlugin, {
        translations,
        fallbackLocales: {
            'en': 'en'
        }
    });
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

    return config;
};