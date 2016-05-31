// Default layout template
var React = require('react');

module.exports = React.createClass({

    render: function() {

        return(
            <html>
                <head>
                    <title>New Deal</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                    <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
                    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css' />
                </head>
                <body>
                    <div id="app" className='container'></div>
                    <script src="/js/bundle.js"></script>
                </body>
            </html>
        );
    }
});
