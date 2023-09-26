const path = require("path")

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dev_dist'),
        filename: 'bundle.js',

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