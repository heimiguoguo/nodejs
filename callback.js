function login(name, pwd, callback){
    if(name == "tom" && pwd == "123456"){
        callback(name, true);
    }
    else{
        callback(name, false)
    }
}


function callback(name, loginResult){
    if(loginResult == true){
        console.log(name + " login success")
    }
    else{
        console.log(name + " login fail")
    }
}

login("tom","12356",callback)





