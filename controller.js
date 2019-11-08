const fs = require('fs')

function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers')

    var js_files = files.filter(file => file.endsWith('.js'))

    for (var file of js_files) {
        console.log(`Process controller of ${file}...`)
        let mapping = require(__dirname + '/controllers/' + file)
        addMapping(router, mapping)
    }
}

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4)
            router.get(path, mapping[url])
            console.log(`\tregister URL mapping: GET ${path}`)
        } else if (url.startsWith('POST')) {
            var path = url.substring(5)
            router.post(path, mapping[url])
            console.log(`\tregister URL mapping: POST ${path}`)
        } else {
            console.log(`\tinvalid URL: ${url}`)
        }
    }
}

module.exports = function(dir) {
    let controllers_dir = dir || 'controllers'
    let router = require('koa-router')()
    addControllers(router, controllers_dir)
    return router.routes()
}