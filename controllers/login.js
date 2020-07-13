const { User } = require('../model')

var fn_index = async (ctx, next) => {
    ctx.render('login.html', {
        title: 'Login'
    })
}

var fn_login = async (ctx, next) => {
    var email = ctx.request.body.email || ''
    var password = ctx.request.body.password || ''
    var user = await User.findAll({
        where: {
            email,
            password
        }
    })
    if (user.length) {
        ctx.cookies.set('username',user.name)
        ctx.response.redirect('/index')
    } else {
        ctx.response.res.redirect('/login')
    }
}

const isLogin = (req, res, next) => {
    const { username } = req.cookies
    if (username) {
        next()
    }
    else {
        res.redirect('/')
    }
}

module.exports = {
    'GET /': fn_index,
    'POST /login': fn_login
}