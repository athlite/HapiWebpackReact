'use strict';

const Confidence = require('confidence');

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    $meta: 'This file is the global config.',

    server: {
        debug: {
            request: {
                $filter: 'env',
                test: false,
                $default: ['error','info']
            }
        },
        connections: {
            routes: {
                security: true
            }
        }
    },

    connections: [{
        host: {
            $filter: 'env',
            production: '0.0.0.0',
            $default: 'localhost'
        },
        port: {
            $filter: 'env',
            production: 3000,
            $default: 8000
        },
        labels: ['api']
    }],

    registrations: [
        { plugin: 'inert' },
        { plugin: 'vision' },
        { plugin: './routes/index' },
        { plugin: {
            register: 'visionary',
            options: {
                engines: {
                    jsx: 'hapi-react-views'
                },
                relativeTo: __dirname,
                path: 'views'
            }
        }},
        { plugin: {
            register: './plugins/webpack-middleware',
            options: {
                relativeTo: __dirname,
                filename: 'webpack.config.js'
            }
        }}
    ]
};

const store = new Confidence.Store(manifest);

exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
