var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    mode:'production',
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:'/\.css$/',use:['style-loader','css-loader']},//处理css 文件
            {test:'/\.scss$/',use:['style-loader','css-loader','sass-loader']},
            {test:'/\.less/',use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpeg|jpg|png|gif|bmp)$/,use:"url-loader"},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {
                test:'/\.js$/' ,
                loaders: 'babel-loader',
                exclude:/node_modules/} ,                       //babel 转换高级 ES语法
            { test:/\.vue$/,use:'vue-loader'},

        ]
    },
    performance: {

        hints:false

    }

}