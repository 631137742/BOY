const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var sql = " SELECT uid FROM boy_user";
        sql+=" WHERE uname = ? AND upwd = md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码有误"});
        }else{
            var id = result[0].id;
            req.query.uid = id;
            res.send({code:1,msg:"登录成功"})
        }
    });
});



module.exports=router;
