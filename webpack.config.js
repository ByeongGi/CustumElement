/**
 * Webpack client bulid 설정
 */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: ['./src/index.ts', './src/index.scss'],
    output: {
        filename: 'client.js',
        path: __dirname + /build/

    },
    devtool: 'source-map',
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts?$/,
                use: "source-map-loader"
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         //resolve-url-loader may be chained before sass-loader if necessary
            //         use: ['css-loader', 'sass-loader']
            //     })
            // },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,

            }

        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "client",        
        //   filename :'client.min.js',
        //   // filename: "vendor.js"
        //   // (Give the chunk a different name)

        //   minChunks: Infinity,
        //   // (with more entries, this ensures that no other module
        //   //  goes into the vendor chunk)
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //    beautify: false,
        //    mangle: {
        //     screw_ie8: true,
        //     keep_fnames: true
        //   },
        //   compress: {
        //     screw_ie8: true
        //   },
        //   comments: false
        // })
    ]
};