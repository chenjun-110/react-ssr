var webpack = require('webpack');
module.exports = {
    mode: 'development',//4.X独有
    node: { fs: 'empty', net: 'empty', child_process: 'empty', tls: 'empty', },
    target: "node",//打包后端，编译后没有window对象
    entry: './back.js', //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        path: __dirname, //输出位置
        filename: 'nodes.js' //输入文件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ["babel-loader"]
            },
            {
                test: /\.(css)$/,
                use: ['isomorphic-style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            // importLoaders: 2,//对应下面有几个loader
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    // 'postcss-loader',
                    // 'sass-loader',
                ]
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
        //   new webpack.BannerPlugin('This file is created by ly')
    ]
}