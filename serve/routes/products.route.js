const express=require("express")
const router=express.Router();
const pool=require("../pool");

//商品
router.get("/",(req,res)=>{
  var sql=`select * from boy_index_product where pid!=0 order by pid `;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });//writeHead在相应过程中只能写1次，再写会冲突报错
    //res.send(result);
    res.write(JSON.stringify(result))
    res.end();   
  })
});

// router.get("/pno",(req,res)=>{
//   var pno=req.query.pno;
//   var pageSize=req.query.pageSize;
//   if(!pno){
//   pno=1;
//   }
//   if(!pageSize){
//   pageSize=9;
//   }
//   var p=0;
//   var obj={code:1}
//   var sql="select * from boy_index_product limit ?,?";
//   var offset=(pno-1)*pageSize;
//   pageSize=parseInt(pageSize);
//   pool.query(sql,[offset,pageSize],(err,result)=>{
//   if(err) throw err;
//   p+=50;
//   obj.data=result;
//   if(p==100){
//   res.send(obj)
//   }
//   })
//   var sql='select count(pid) as c from boy_index_product';
//   pool.query(sql,(err,result)=>{
//   if(err) throw err;
//   var ps=Math.ceil(result[0].c/pageSize)
//   p+=50;
//   obj.pageCound=ps;
//   if(p==100){
//   res.send(obj)
//   }
//   })
//   })

module.exports=router;