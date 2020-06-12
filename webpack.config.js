const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //'sass-loader'
                ]
            }, {
                test: /\.dae$/,
                use: {
                    loader: 'three-collada-loader'
                }
            }, { // /\.(png|jp(e*)g|svg|gif)$/
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ]
            }, 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}


// {
//     test: /\.svg$/,
//     loader: 'svg-inline-loader'
// },