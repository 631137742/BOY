<template>
    <div class="container">
        <!-- 面包屑导航-->
        <ul class="breadcrumb m-0">
            <li class="breadcrumb-item">
                <router-link class="text-dark" to="/">Home </router-link>
            </li>
            <li class="breadcrumb-item">
                <a class="text-dark" href="#">注册会员</a>
            </li>
        </ul>
        <!--注册列表-->
    <div class="p-5">
        <h2 class="text-left text-dark mb-5">注册</h2>
        <div class="row border border-dark p-5">
            <h3 class="col-sm-12">会员注册</h3>
            <div class="col-lg-8 col-sm-12 col-xs-12">
                <input class="border border-dark w-100 p-2" type="text" placeholder="用户名" name="uname" v-model="uname"/><br>
                <input class="border border-dark w-100 p-2 mt-2" type="password" placeholder="密码" name="upwd" v-model="upwd"/><br>
                <input class="border border-dark w-100 p-2 mt-2" type="text" placeholder="邮箱" name="uname" v-model="email"/><br>
                <input class="border border-dark w-100 p-2 mt-2" type="text" placeholder="手机号码" name="uname" v-model="phone"/><br>
            </div>
            <div class="col-lg-4 col-sm-12">
                <input class="w-100 h-50 text-white bgbackground" type="button" value="注册会员" @click="butUser">
                <input class="w-100 h-50 text-muted bgbackground-white" type="button" value="取消">
            </div>
            <div class="col-sm-12">
                <label class="float-left"><input type="checkbox"/>同意</label>
            </div>
            <button class="col-lg-3 col-sm-12 mr-2">注册账号</button>
            <button class="col-lg-3 col-sm-12 mr-2">找回账户</button>
            <button class="col-lg-3 col-sm-12 mr-2">找回密码</button>
            <p class="pt-3">@如果忘记订单号和密码，请联系客服中心。</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                uname:"",
                upwd:"",
                email:"",
                phone:""
            }
        },
        methods:{
            butUser(){
                //绑定点击事件 获取用户输入账户和密码
                var u = this.uname;
                var d = this.upwd;
                var e = this.email;
                var p = this.phone;
                var reg = /^[a-z0-9]{11}$/i;
                if(!reg.test(p)){
                    alert("手机号码格式不正确，请检查");
                    return;
                }
                var res = /^[a-z0-9]{3,12}$/i;
                if(!res.test(u)){
                    alert("用户名格式不正确，请检查");
                    return;
                }
                var url="http://127.0.0.1:3000/user/regss?uname="+u;
                this.axios.get(url).then(result=>{
                    console.log(result.data.code)
                    if(result.data.code==1){
                        alert("用户名已存在")
                        return;
                    }else if(result.data.code==-1){
                        var url="http://127.0.0.1:3000/user?"
                        url+="uname="+u
                        url+="&upwd="+d;
                        url+="&email="+e
                        url+="&phone="+p
                        this.axios.get(url).then(result=>{
                            if(result.data.code == 1){
                                alert("注册成功,即将跳转登录页面")
                                var id=setTimeout(()=>{
                                this.$router.push("/")
                                },2000) 
                            }
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>
.bgbackground{
    background:#000;
    font-size: 2em
}
.bgbackground-white{
    background:#fff;
    font-size: 2em
}
</style>