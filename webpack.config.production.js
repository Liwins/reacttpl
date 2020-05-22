var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 构建前删除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, "docs"),
        publicPath: "/",
        filename: "assets/[name].[hash].js",
        chunkFilename: "assets/[name].[chunkhash].js"
    },
    devtool: "eval",
    resolve: {
        alias:{
            '@':path.resolve(__dirname,'./src'),
            antdcss: 'antd/dist/antd.min.css'  // import时的别名
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader', options: {
                presets: [
                    ["es2015", {"modules": false}],
                    "stage-0",
                    "react"
                ],
                plugins: [
                    "transform-async-to-generator",
                    "transform-decorators-legacy"
                ]
            } },
            {
                test: /\.scss|css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ]
            },
            { test: /\.less$/, use:["style-loader","css-loader","postcss-loader","less-loader"] },
            { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000' },  // 限制大小5kb
            { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000' } // 限制大小小于5k
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                drop_console: true,
                screw_ie8: true
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin("assets/styles.css"),
        new CleanWebpackPlugin(['docs','docs/assets/*.*'],{
            root: path.resolve(__dirname, './'),
            dry: false // 启用删除文件
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: "./index.hbs"
        })
       
    ]
};