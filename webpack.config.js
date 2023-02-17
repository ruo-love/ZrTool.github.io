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
    resolve: {
        extensions: ['.js', '.ts',],
    },
    plugins: [new htmlPlugin()],
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