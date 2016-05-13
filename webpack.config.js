/**
 * Created by LikoLu on 2016/3/29.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: "source-map",
    entry: [
        'webpack-dev-server/client?http://localhost:3004', // WebpackDevServer host and port
        'webpack/hot/dev-server',
        './src/js/index.js'
    ],
    output: {
        publicPath:'/public/js',
        path: __dirname+'/public/js',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js','jsx']
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|woff|woff2|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            "Action": __dirname + "/src/js/actions/index.js",
            "Common": __dirname + "/src/js/constants/index.js",
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]/*,
    watch: true*/
};