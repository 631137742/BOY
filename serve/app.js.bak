//部署听云探针
require('tingyun');

//使用express构建web服务器 --11:25
const express = require('express');
//加载第三方模块 body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index.route");
const details=require("./routes/details.route");
const login=require("./routes/login.route");
const user=require("./routes/user.route");
const products=require("./routes/products.route");


var app = express();
var server = app.listen(3000);

//加载跨域访问模块
const cors = require("cors");
//配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//下载 express-session 并且配置
const session = require("express-session")
app.use(session({
  secret:"128位随机字符串", //安全字符串
  resave:false,            //每次请求是否都更新数据
  saveUninitialized:true,   //初始化时保存数据
  cookie:{
    maxAge:1000 * 60 * 60 * 8
  }
}));



//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
http://localhost:3000/index
app.use("/index",index);
app.use("/details",details);
app.use("/login",login);
app.use("/user",user);
app.use("/products",products);

