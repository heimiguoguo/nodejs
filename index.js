/**
 * Created by Tom on 2018/6/9.
 */
var server = require("./server")
var router = require("./router")


server.start(router.route)