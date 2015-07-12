/**
 * This leverages Express to create and run the http server.
 * A Fluxible context is created and executes the navigateAction
 * based on the URL. Once completed, the store state is dehydrated
 * and the application is rendered via React.
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import rp from 'request-promise';
import http from 'http';
import favicon from 'serve-favicon';
import serialize from 'serialize-javascript';
import {navigateAction} from 'fluxible-router';
import debugLib from 'debug';
import React from 'react';
import app from './app';
import HtmlComponent from './components/Html';
import { createElementWithContext } from 'fluxible-addons-react';
const htmlComponent = React.createFactory(HtmlComponent);

const debug = debugLib('nooor-ui');

const server = express();
server.set('state namespace', 'App');
server.use(favicon(path.join(__dirname, '/favicon.ico')));
server.use('/public', express.static(path.join(__dirname, '/build')));
server.use('/fonts', express.static(path.join(__dirname, '/fonts')));
server.use('/assets', express.static(path.join(__dirname, '/assets')));
// Get access to the fetchr plugin instance
let fetchrPlugin = app.getPlugin('FetchrPlugin');
// Register our services
fetchrPlugin.registerService(require('./services/quran'));
// Set up the fetchr middleware
server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());
server.use((req, res, next) => {
    let context = app.createContext();

    debug('Executing navigate action');
    context.getActionContext().executeAction(navigateAction, {
        url: req.url
    }, (err) => {
        if (err) {
            if (err.statusCode && err.statusCode === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        debug('Exposing context state');
        const exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        debug('Rendering Application component into html');
        const html = React.renderToStaticMarkup(htmlComponent({
            context: context.getComponentContext(),
            state: exposed,
            markup: React.renderToString(createElementWithContext(context))
        }));

        debug('Sending markup');
        res.type('html');
        res.write('<!DOCTYPE html>' + html);
        res.end();
    });
});
let args = process.argv.slice(2);
const port = parseInt(args[0], 10) || 3000;
console.log('Listening on port ' + port);
server.listen(port)
export default server;
