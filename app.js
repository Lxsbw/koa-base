import Koa from 'koa';
import views from 'koa-views';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import koastatic from 'koa-static';
import koaSwagger from 'koa2-swagger-ui';

import path from 'path';

import swagger from './config/swagger.js';
import index from './routes/index.js';
import users from './routes/users.js';

const app = new Koa();
const __dirname = path.resolve();

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
);
app.use(json());
app.use(logger());
app.use(koastatic(__dirname + '/public'));

app.use(
  views(__dirname + '/views', {
    extension: 'pug'
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// swagger
app.use(swagger.routes(), swagger.allowedMethods());
app.use(
  koaSwagger.koaSwagger({
    routePrefix: '/api-docs/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: '/swagger.json' // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    }
  })
);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

// module.exports = app;
export default app;
