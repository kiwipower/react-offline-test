const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const host = 'localhost';
const port = 8080;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
        app: [
            './index.js'
        ],
    },
    output: {
        filename: '[name]-[hash:6].bundle.js',
        path: path.join(__dirname, './build/www'),
        publicPath: `http://${host}:${port}/`,
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=img/[name]-[hash:6].[ext]',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash:6].css',
            chunkFilename: '[id].css',
            debug: true
        })
    ],
    devServer: {
        port,
        host,
        contentBase: '/src',
    },
};
