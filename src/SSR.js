import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerRouter } from './router.js'

class SSR {
    render(url, ctx) {
        const context = {}
        const html = renderToString(
            ServerRouter(url, context)
        );
        console.log('html', html)
        return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="theme-color" content="#000000">
                <link rel="stylesheet" type="text/css" href="./main.css" />
                <title></title>
            </head>
            <body>
                <noscript>
                本页面需要浏览器支持（启用）JavaScript
                </noscript>
                <div id="root">${html}</div>
                <script src="./bound.js"></script>
            </body>
        </html>`
    }
}


export default SSR;