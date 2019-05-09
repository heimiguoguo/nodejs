let fn_getUserById = async (ctx, next) => {
    ctx.response.body = 'json';
    ctx.response.body = { name: 'tom', age: 25 };
}

module.exports = {
    'GET /getUser/:id': fn_getUserById
}