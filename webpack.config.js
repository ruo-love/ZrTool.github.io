const path = require("path")
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",

    entry: path.join(__dirname, './src/index.ts'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name]-[hash:10].js',
        clean: true
    },
    plugins: [new htmlPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /(node_modules|bower_components)/,
            }
        ]
    }
}