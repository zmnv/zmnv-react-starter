// const glob = require('glob');
const path = require('path');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackInlineStylePlugin = require('html-webpack-inline-style-plugin');

// const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
//     dir => {
//         new HTMLWebpackPlugin({
//             filename: path.basename(dir), // Output
//             template: dir, // Input
//         });
//         new HtmlWebpackInlineStylePlugin();
//     },
// );

module.exports = {
    node: {
        fs: 'empty',
    },
    //   entry: ['./src/js/app.js', './src/style/main.scss'],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[hash].au-eazy-designer.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
        ],
    },
    plugins: [
        // new CopyWebpackPlugin([
        //   {
        //     from: './src/static/',
        //     to: './static/',
        //   },
        // ]),
        // ...generateHTMLPlugins(),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            inlineSource: '.(jsx|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin(),
        // new HtmlWebpackInlineStylePlugin()
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
};
