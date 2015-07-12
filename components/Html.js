'use strict';
var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');

class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.0/semantic.min.css" rel="stylesheet" type="text/css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.min.css" rel="stylesheet" type="text/css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/jqcloud/1.0.4/jqcloud.css" rel="stylesheet" type="text/css" />
                <link href="/fonts/index.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jqcloud/1.0.4/jqcloud-1.0.4.min.js"></script>
            <script src="/public/js/main.js"></script>
            </html>
        );
    }
}

module.exports = Html;
