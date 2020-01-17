<template>
    <div class="container">
        <!-- 面包屑导航-->
        <ul class="breadcrumb m-0">
            <li class="breadcrumb-item">
                <router-link class="text-dark" to="/">Home </router-link>
            </li>
            <li class="breadcrumb-item">
                <a class="text-dark" href="#">登录</a>
            </li>
        </ul>
        <!--登录注册列表-->
    <div class="p-5">
        <h2 class="text-left text-dark mb-5">登录</h2>
        <div class="row border border-dark p-5">
            <h3 class="col-sm-12">会员登录</h3>
            <div class="col-lg-8 col-sm-12 col-xs-12">
                <input class="border border-dark w-100 p-2" type="text" placeholder="用户名" name="uname" v-model="uname"/><br>
                <input class="border border-dark w-100 p-2 mt-2" type="password" placeholder="密码" name="upwd" v-model="upwd"/>
            </div>
            <div class="col-lg-4 col-sm-12">
                <input class="w-100 h-100 text-white bgbackground" type="button" value="登录" @click="butLogin">
            </div>
            <div class="col-sm-12">
                <label class="float-left"><input type="checkbox"/>同意</label>
            </div>
            <button class="col-lg-3 col-sm-12 mr-2"><router-link class="text-muted" to="/user">注册账号</router-link></button>
            <button class="col-lg-3 col-sm-12 mr-2"><router-link class="text-muted" to="/user">找回账户</router-link></button>
            <button class="col-lg-3 col-sm-12 mr-2"><router-link class="text-muted" to="/user">找回密码</router-link></button>
            <p class="pt-3">@如果忘记订单号和密码，请联系客服中心。</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {uname:"",upwd:""}
        },
        methods:{
            butLogin(){
                //绑定点击事件 获取用户输入账户和密码
                var u = this.uname;
                var p = this.upwd;
                //验证不能为空
                var reg = /^[a-z0-9]{3,12}$/i;
                if(!reg.test(u)){
                    alert("用户名格式不正确，请检查");
                    return;
                }
                var url = "http://127.0.0.1:3000/login/";
                    url+="?uname="+u+"&upwd="+p;
                this.axios.get(url).then(result=>{
                    if(result.data.code==1){
                        this.$router.push("/")
                    }else{
                        alert("用户名或密码有误");
                    }
                }) 
            }
        }
    }
</script>

<style scoped>
.bgbackground{
    background:#000;
    font-size: 2em
}
</style>