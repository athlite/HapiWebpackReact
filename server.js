// Create a basic Hapi.js server
require('babel-register')({
    presets: ['es2015', 'react'],
});

const Hapi = require('hapi');
const Glue = require('glue');
const Dateformat = require('dateformat');

const Manifest = require('./manifest');
const options = { relativeTo: __dirname };

Glue.compose( Manifest.get('/'), options).then( (server) => {

    server.start( () => {

        console.log('Server started', server.info.uri, Dateformat(server.info.started));
    });
}, (err) => {

    console.log(err);
});
