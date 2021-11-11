module.exports = function (proMode) {
    return [{
            test: /\.(t|j)s$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            }
        },
        {
            test: /\.less/,
            use: [
                // MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            ident: "postcss",
                            plugin: () => {
                                require("postcss-preset-env")()
                            }
                        }
                    }
                }, "less-loader"
            ]
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                // MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            ident: "postcss",
                            plugin: () => {
                                require("postcss-preset-env")()
                            }
                        }
                    }
                },
                // "less-loader"
            ]
        },
        {
            test: /\.vue$/,
            use: [
                'vue-loader'
            ]
        }
    ]
}