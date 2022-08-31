const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const keycloak = require('../keycloak.json');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
    entry: [path.resolve(__dirname, '../src', 'index.ts')],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/i,
                include: [path.resolve(__dirname, '../src')],
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'es',
                                style: 'css',
                            }),
                        ],
                    }),
                },
            },
            {
                test: /.*\.(gif|png|jp(e*)g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 21000,
                            name: 'images/[name]_[hash:7].[ext]',
                        },
                    },
                ],
            },
            // Vendor CSS loader
            // This is necessary to pack third party libraries like antd
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../node_modules'),
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),
            favicon: path.resolve(__dirname, '../public/icon', 'favicon-32x32.png'),
        }),
        new GenerateJsonPlugin('keycloak.json', keycloak),
        // Copy environment configuration file to the production bundle
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../', 'env.js'),
                to: 'env.js',
            },
        ]),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json' ],
    },
};
