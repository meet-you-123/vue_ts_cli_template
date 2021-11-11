const presets = [
    [
        "@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": "3.19.1"
        }
    ],
    [
        '@babel/preset-typescript', // 引用Typescript插件
        {
            allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
        },
    ],
]
const plugins = [
    //按需引入vant组件
    [
        "import",
        {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
        }, "vant"
    ],
    [
        '@babel/plugin-transform-runtime',
        {
            corejs: 3,
        },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',

]
module.exports = {
    plugins,
    presets
}