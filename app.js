
var express = require("express");
var app = express();

//设置模板位置
app.set("views", "./views");

//设置模板引擎
app.set("view engine", "jade");

app.use(function(request, response, next) {
        //使用模板引擎渲染，data为渲染的对象数据
        var data = {};
        response.render("test.jade", data);
});

app.listen(1024);
