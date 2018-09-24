/**
 * Created by Tom on 2018/6/9.
 */

var http = require("http")
var url = require("url")

function start(route){
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;
        route(pathname, response)
    }).listen(8888)

    console.log("server started at http://127.0.0.1:8888")
}

exports.start = start

