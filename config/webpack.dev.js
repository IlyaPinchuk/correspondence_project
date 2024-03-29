const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mapStyle = process.env.MAP_STYLE === 'true';
const postcss = process.env.POST_CSS === 'true';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        overlay: true,
        open: true,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: postcss
                    ? [
                        { loader: 'style-loader' },
                        {
                            loader: mapStyle ? 'css-loader?sourceMap' : 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                camelCase: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss'
                            }
                        }
                    ]
                    : [
                        { loader: 'style-loader' },
                        { loader: mapStyle ? 'css-loader?sourceMap' : 'css-loader' }
                    ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});
