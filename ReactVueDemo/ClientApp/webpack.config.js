const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jquery": "jquery"
        })/*,
        new HtmlWebpackPlugin({
            title: 'Getting Started'
        })*/

    ],
    module: {
        rules: [{
                test: require.resolve("jquery"),
                use: [{
                    loader: "expose-loader",
                    options: "jquery"
                }, {
                    loader: "expose-loader",
                    options: "$"
                }]
            },
            /*
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
			},
            {
                test: /font-awesome\.config\.js/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "font-awesome-loader"
                    }
                ]
			},
			*/
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    "xml-loader"
                ]
            }
        ]
    },

    entry: {
        app: './src/app.js',
        print: "./src/print.js"
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            name: true,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }
};
