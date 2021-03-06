const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    VueLoaderPlugin
} = require('vue-loader');
const rules = require("./webpack.rules.conf.js")
const envMode = process.env.envMode
require("dotenv").config({
    path: `.env.${envMode}`
})
const prefixRE = /^VUE_APP_/
let env = {}
for (const key in process.env) {
    if (key == "NODE_ENV" || key == "BASE_URL" || prefixRE.test(key)) {
        env[key] = JSON.stringify(process.env[key])
    }
}


const cdn = {
    dev: {
        css: [],
        js: []
    },
    prod: {
        css: [],
        js: [
            'https://lib.baomitu.com/vue/3.0.11/vue.runtime.global.prod.js',
            "https://lib.baomitu.com/vue-router/4.0.6/vue-router.global.prod.min.js",
            "https://lib.baomitu.com/vuex/4.0.0/vuex.global.prod.min.js"
        ]
    }
}
module.exports = function (proMode) {
    return {
        entry: path.resolve(__dirname, "../src/main.ts"),
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "./js/[name].[chunkhash].js",
            clean: true
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "../src")
            },

            //扩展名书写
            //把项目中所有的扩展名都写上去，要不然会报错
            extensions: [".js", ".vue", ".ts"]
        },
        plugins: [
            new webpack.DefinePlugin({ // 定义环境和变量
                'process.env': {
                    ...env
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../public/index.html"), //引用模板位置
                filename: "index.html", //生成的html，路径相对于output.path
                title: "webpack+vue3",
                minify: {
                    collapseWhitespace: true, //是否折叠空白
                    preserveLineBreaks: false,
                    minifyCSS: true, //是否压缩
                    minifyJS: true,
                    removeComments: false
                },
                files: proMode ? cdn.prod : cdn.dev
            }),
            new VueLoaderPlugin()
        ],
        module: {
            rules: rules(proMode)
        },
    }
}