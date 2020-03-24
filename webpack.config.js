const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    devtool: 'source-map',

    entry: [
        './src/js/index.js',
        './src/sass/main.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/build.js'
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                loader: [
                    // Copy Css to disk
                    MiniCssExtractPlugin.loader,

                    // Creates 'styles' modes from JS strings
                    // 'style-loader',

                    // Translates CSS to Common JS
                    'css-loader',

                    // Compiles SASS to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
};