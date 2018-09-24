/**
 * Created by Tom on 2018/6/9.
 */
function route(pathname, response){
    response.writeHead(200,{"Content-Type":"text/plain"})
    if(pathname == "/hello"){
        response.end("hello")
    }
    else if(pathname == "/world"){
        response.end("world")
    }
}
exports.route = route