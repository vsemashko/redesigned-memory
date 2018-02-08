const path = require('path');

module.exports = {
    entry: {
        main: ['babel-polyfill', './src/main.js']
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: 'dist',
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html'
                        }
                    },
                    'extract-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: [/\.(bmp|gif|jpe?g|png)$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
