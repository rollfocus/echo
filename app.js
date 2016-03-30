
var express = require("express");
var app = express();

//设置模板位置
app.set("views", "./views");

//设置模板引擎
app.set("view engine", "jade");

app.use(function(request, response, next) {
        console.log("receive a request");
        //使用模板引擎渲染，data为渲染的对象数据
        var data = {};
        data = {"book": {"name": "Hello", "price": 12.99}};
        response.render("test.jade", data);

        //response.end("do you reveice??");
});

app.listen(1024);
console.log('you can visit caoduozi in http://127.0.0.1:1024/');
