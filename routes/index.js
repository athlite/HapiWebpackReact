exports.register = function (server, options, next) {

    // Add main app route
    server.route({
        method: 'GET',
        path: '/',
        handler: {
            view: 'default'
        }
    });

    // static assets
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                index: ['index.html']
            }
        }
    });
    next();
};

exports.register.attributes = {
    name: 'index-route'
};
