const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    externals: [
        nodeExternals()
    ],
    target: 'node',
    node: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    //好像不好使
                    failOnError: true,
                }
            }
        ]
    }
}