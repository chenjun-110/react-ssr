import React from 'react';
import { renderToString } from 'react-dom/server';
import SSR from './src/SSR';
import Koa from 'koa';
import path from 'path';
import route from 'koa-route';
import Static from 'koa-static';
const app = new Koa();

const imagesPath = path.join(path.resolve('./static'), '/')
app.use(Static(imagesPath))

const html = new SSR()
app.use(route.get('/*', async ctx => {
    console.log('url', ctx.url)
    ctx.body = html.render(ctx.url, ctx)
    console.log('ctx.body', ctx.body)
}));
app.listen(4000);
console.log('开启SSR', imagesPath)
