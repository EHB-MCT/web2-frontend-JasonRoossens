const path = require('path');

// entry: ['./src/script.js', './src/breeds.js'],

module.exports = {

    entry: {
        index: './src/script.js',
        breeds: './src/breeds.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),

    },

    mode: 'production',
    watch: true
};