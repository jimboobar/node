
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/main.less',
            './src/main.js'
        ]
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve('./src'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                include: path.resolve('./src'),
                exclude: /node_modules/,
                loader: "style-loader!css-loader!postcss-loader!less-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test stuff'
        })
    ]
};
