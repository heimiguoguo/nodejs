const Koa = require('koa')

const bodyParser = require('koa-bodyparser')

const controller = require('./controller')

const templating = require('./templating')

const isProduction = process.env.NODE_ENV === 'production'

const app = new Koa()

app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`)
    await next()
})

app.use(async(ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms\n`); // 打印耗费时间
});
console.log(isProduction)
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}))

app.use(bodyParser())

app.use(controller())

app.listen(3000)
console.log('app started at port 3000\n')
