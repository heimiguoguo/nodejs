const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 导入controller middleware:
const controller = require('./controller');
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());
// 使用middleware:
app.use(controller());

let port = 8080
app.listen(port);
console.log('app started at port ' + port + '...');