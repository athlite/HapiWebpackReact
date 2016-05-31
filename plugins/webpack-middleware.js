'use strict';

import Webpack from 'webpack';
import WebpackPlugin from 'hapi-webpack-plugin';
import Path from 'path';

exports.register = function (server, options, next) {

    const config  = require(Path.join(options.relativeTo, options.filename));

    const compiler = Webpack(config);

    const assets = {
        noInfo: true,
        publicPath: config.output.publicPath
    };

    server.register({
        register: WebpackPlugin,
        options: { compiler, assets }
    });

    next();
};

exports.register.attributes = {
    name: 'webpack-middleware'
};
