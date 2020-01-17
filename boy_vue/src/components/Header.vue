<template>
  <!--public项目/header.html中<body>内的<header></header>-->
  <header id="header" class="container  pb-2">
        <!-- 顶部左中右-->
        <div class="row mt-3">
            <div class="col-lg-3 col-md-3 col-sm-12">
                <router-link to="/" class="navbar">
                    <img class="logo navbar-brand" src="img/header/70b570d4807ec29613980def3880ec03_40604.png"/>
                </router-link>
            </div>
            <div class="header-search col-lg-6 col-md-5 col-sm-12">
                <div class="input-group p-4">
                    <input type="text" placeholder="请输入您要搜索的内容" class="form-control p-3 pl-3 mt-3 my_small"/>
                    <a href=""><img class="p-2 mt-3" src="img/header/quick-search-tit.png"/></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-11 mt-3">
                <ul class="list-unstyled d-flex mt-4 float-right">
                    <li>
                        <a href="#"><img class="w-50" src="img/header/wish-2.png" /></a>
                        <b class="mr-1 ml-1 my_gray">|</b>
                    </li>
                    <li>
                        <a href="#"><img class="w-50" src="img/header/order.png" /></a>
                        <b class="mr-1 ml-1 my_gray">|</b>
                    </li>
                    <li>
                        <a href="#"><img class="w-50" src="img/header/shop_car.png" /></a>
                        <b class="mr-1 ml-1 my_gray">|</b>
                    </li>
                    <li>
                        <router-link to="/user" class="text-muted">注册</router-link>
                        <b class="mr-1 ml-1 my_gray">|</b>
                    </li>
                    <li>
                        <router-link to="/login" class="text-muted">登录</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
  }
</script>

<style scoped>
#header .row .header-search .input-group>a>img{
    height: 34px;
}
#header .row .header-search .input-group>a>img:hover{
    background-color: rgba(0, 0, 0, 0.2) 
}
</style>