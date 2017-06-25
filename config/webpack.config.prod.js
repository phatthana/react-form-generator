const path = require('path')
const webpack = require('webpack')

process.env.NODE_ENV = 'production'

console.log(path.join(__dirname, '../src/index.prod.js'));

module.exports = {
    entry: path.join(__dirname, '../src/index.prod.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.prod.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}
