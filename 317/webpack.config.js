const path = require('path')

//1.导入html-webpack-plugin插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')

//2.new构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html'
})

//使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    //代表webpack运行的模式。可选值有两个development和production
    mode: 'development',

    //entry:'制定要处理的哪个文件'
    entry: path.join(__dirname, './src/index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins: [htmlPlugin],

    devServer: {
        open: true,
        port: 80,
        host: '127.0.0.1'
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use:  ['style-loader', 'css-loader', 'less-loader']}
         ]
    }
}