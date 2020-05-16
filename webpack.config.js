var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias:{
            '@':path.resolve(__dirname,'./src')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [

            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000' },  // 限制大小5kb
            { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000' } // 限制大小小于5k


        ]
    },

    plugins: [ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),//模板路径
            filename: 'index.html'//自动生成的HTML文件的名称
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [autoprefixer]//调用autoprefixer插件，例如 display: flex

            }
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8089'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
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
