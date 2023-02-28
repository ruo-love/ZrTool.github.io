const path = require("path")
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/package/index.ts'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
        library: {
            name: 'zrtool',
            type: 'umd',
        },
    },

    resolve: {
        extensions: ['.js', '.ts',],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
            }
        ]
    }
}