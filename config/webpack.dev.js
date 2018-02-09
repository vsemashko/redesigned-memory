const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    devtool: 'source-map',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    devServer: {
        contentBase: 'dist',
        overlay: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                require('autoprefixer')({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9'
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: [/\.(bmp|gif|jpe?g|png)$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
