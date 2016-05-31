// Webpack config file

var webpack = require('webpack');

const config = {
    entry: {
        bundle: __dirname + '/frontend/js/index.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

if (process.env.NODE_ENV === 'development') {
    config.devtool = 'cheap-module-eval-source-map';
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.DefinePlugin({
            'process': {
                'env': {
                    'NODE_ENV': JSON.stringify("production")
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        })
    ];
}

module.exports = config;
