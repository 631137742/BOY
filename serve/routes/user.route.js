const express=require("express");
const router=express.Router();
const pool=require("../pool");

//注册
router.get("/",(req,res)=>{
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var email = req.query.email;
    var phone = req.query.phone;
    var user_name = req.query.user_name;
    var sql = " INSERT INTO boy_user";
        sql+=" VALUES(NULL,?,?,?,?,NULL,NULL,NULL)";
    pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows > 0){
            res.send({code:1,msg:"添加成功"});
        }else{
            res.send({code:-1,msg:"添加失败"});
        }
    });
});

router.get("/regss",(req,res)=>{
    var uname=req.query.uname
    var sql="SELECT * FROM boy_user WHERE uname=?"
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,data:"用户名已存在"})
        }else{
            res.send({code:-1,data:"用户名不存在"})
        }
    });
});

module.exports=router;
