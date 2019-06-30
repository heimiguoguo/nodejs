const Koa = require('koa')
const router = require('koa-router')()

const mongoose = require('mongoose');
mongoose.connect('mongodb://120.24.172.85/test', { useNewUrlParser: true });

const User = mongoose.model('User', { name: String, age: Number });

// const user = new User({ name: 'Zildjian', age: 24 });
// user.save().then(() => console.log('meow'));

var app = new Koa()

router.get('/', async (ctx, next) => {
    // User.find({ name: 'tom' }, function (err, users) {
    //     console.log(users)
        
    // })
    ctx.response.body = {
        name: 'tom',
        age: 25
    }
})

app.use(router.routes())

const port = 3000
app.listen(port)
console.log(`app started at port ${port}`)