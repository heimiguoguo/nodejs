var fn_index = async (ctx, next) => {
    const query = ctx.query
    const { username } = ctx.cookies
    let model = {}
    if (!query.tab) {
        model = {
            tab: '',
            shops: [
                {
                    brand: 'BMW',
                    address: '徐东大街'
                },
                {
                    brand: 'Audi',
                    address: '民族大道'
                },
            ]
        }
    }
    else {
        model = {
            tab: query.tab
        }
    }
    ctx.render('index.html', { ...model })
}

module.exports = {
    'GET /index': fn_index
}