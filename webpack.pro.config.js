const path = require("path")
console.log(process.env.NODE_ENV)

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/package/index.ts'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
        library: {
            name: '@zrcode/jstool',
            type: 'umd',
        },
    },

    resolve: {
        extensions: ['.js', '.ts',],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
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