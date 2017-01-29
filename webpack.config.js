var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
module.exports={
    devtool: debug ? "inline-sourcemap" : null,
        entry:'./src/js/app.js',
    output:{
    filename:'./dist/build.min.js'
    },
    watch:true,
    module:{
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /(node_modules|bower_components)/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders:[
            {
            test: /\.scss$/,
            loader:'style!css!sass'
            },
            {
                test:/\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                query:{
                    presets:['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};