var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin=require("open-browser-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js'
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
            { test: /\.less$/, use:["style-loader","css-loader","postcss-loader","less-loader"]},
            { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000' },  // 限制大小5kb
            { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000' } // 限制大小小于5k


        ]
    },

    plugins: [ // 添加plugins节点配置插件
        new webpack.NamedModulesPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
        new HtmlWebpackPlugin({
            hash: false,
            template: "./index.hbs"
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

    ],
    devServer: {
        // colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true, // 使用热加载插件 HotModuleReplacementPlugin
        proxy: { // 请求到 '/device' 下 的请求都会被代理到 target： http://debug.xxx.com 中 
            '/v1/*': {
                target: 'http://localhost:8080', secure: false, // 接受 运行在 https 上的服务 
                changeOrigin: true
            }
        }
    }





}
