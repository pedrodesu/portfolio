const withPlugins = require('next-compose-plugins');
const images = require('remark-images');
const emoji = require('remark-emoji');

const withMDX = require('@next/mdx')({
    options: {
        remarkPlugins: [images, emoji]
    }
});

const config = {
    pageExtensions: ['tsx', 'mdx'],
    future: {
        webpack5: true,
    }
}

module.exports = withPlugins([
    withMDX,
], config);
