var webpack = require('webpack');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path')
// console.log(path.resolve(__dirname, 'testloader'))
// import csshook from 'css-modules-require-hook/preset';
// var csshook = require('css-modules-require-hook/preset');
module.exports = {
    mode: 'development',//4.X独有
    entry: './src/index.js', //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        path: __dirname+'/static', //输出位置
        filename: 'bound.js' //输入文件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // importLoaders: 2,//对应下面有几个loader
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                ],
                // use: ['style-loader', 
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             // importLoaders: 2,
                //             //对应下面有几个loader
                //             modules: true,
                //             localIdentName: '[name]_[local]_[hash:base64:5]'
                //         }
                //     },
                //     // 'postcss-loader',
                //     // 'sass-loader',
                // ]
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use:[{
                    loader: 'file-loader', //处理svg
                    options: {
                        publicPath:"/", //组件内静态文件引用路径
                        outputPath:'/static', //打包后真实路径
                    }
                }]
            }
        ]
    },
    //其他解决方案配置
    resolve: {
        extensions: ['.js']//添加在此的后缀所对应的文件可以省略后缀
    },
    //插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
        //   new webpack.BannerPlugin('This file is created by ly')
    ]
}