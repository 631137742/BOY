
<template>
  <main id="main" class="container">
    <!-- 折叠导航栏-->
    <div class="navbar navbar-expand-lg bg-light navbar-dark w-100 mb-4 pt-0 pb-0">
        <router-link class="navbar-brand" to="products/1">
            <img class="w-50" src="img/header/order-completion.png"/>
        </router-link>
        <!-- 小屏幕时按钮-->
        <button class="navbar-toggler" data-toggle="collapse" data-target="#d1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="d1" class="header-navbar collapse navbar-collapse justify-content-between">
            <!-- 首页导航栏-->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="./porduct.html" class="nav-link">
                        <img class="my_nav-img" src="img/header/005_cateImg_goods.png"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img class="my_nav-img" src="img/header/012_cateImg_goods.png"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img class="my_nav-img" src="img/header/013_cateImg_goods.png"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img class="my_nav-img" src="img/header/009_cateImg_goods.png"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img class="my_nav-img" src="img/header/011_cateImg_goods.png"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img class="my_nav-img" src="img/header/007_cateOverImg_goods.png"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="porduct.html" class="nav-link">
                        <img class="my_nav-img" src="img/header/006_cateImg_goods.png"/>
                    </a>
                </li>
            </ul>
            <div class="navbar-nav">
                <div class="nav-item">
                        <div class="navbar-img row">
                            <a data-toggle="modal" data-target="#myModal" href="#"><img class="col-sm-12 p-0" src="img/header/sns_01.png"></a>
                            <a data-toggle="modal" data-target="#myModal" href="#"><img class="col-sm-12 p-0" src="img/header/sns_02.png"/></a>
                            <a  data-toggle="modal" data-target="#myModal" href="#"><img class="col-sm-12 p-0" src="img/header/sns_03.png"/></a>
                        </div>
                    <div id="myModal" class="modal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    联系我们
                                    <button class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <p>QQ:1214633619</p>
                                    <p>vx:wxt1214633619</p>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-danger" data-dismiss="modal">关闭</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 首页轮播图-->
    <div id="demo" class="carousel" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/banner/mz_001.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_002.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_003.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_004.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_005.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_007.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_008.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_009.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_010.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_011.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_012.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_013.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_014.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_015.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_016.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_017.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_018.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_019.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_020.jpg"/>
            </div>
            <div class="carousel-item">
                <img src="img/banner/mz_021.jpg"/>
            </div>
        </div>
        <ul class="carousel-indicators">
            <li class="active" data-target="#demo" data-slide-to="0"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
            <li data-target="#demo" data-slide-to="6"></li>
            <li data-target="#demo" data-slide-to="7"></li>
            <li data-target="#demo" data-slide-to="8"></li>
            <li data-target="#demo" data-slide-to="9"></li>
            <li data-target="#demo" data-slide-to="10"></li>
            <li data-target="#demo" data-slide-to="11"></li>
            <li data-target="#demo" data-slide-to="12"></li>
            <li data-target="#demo" data-slide-to="13"></li>
            <li data-target="#demo" data-slide-to="14"></li>
            <li data-target="#demo" data-slide-to="15"></li>
            <li data-target="#demo" data-slide-to="16"></li>
            <li data-target="#demo" data-slide-to="17"></li>
            <li data-target="#demo" data-slide-to="18"></li>
            <li data-target="#demo" data-slide-to="19"></li>
            <li data-target="#demo" data-slide-to="20"></li>
        </ul>
        <a href="#demo" data-slide="prev" class="carousel-control-prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#demo" data-slide="next" class="carousel-control-next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    <!-- 面包屑导航-->
    <ul class="breadcrumb m-0">
        <li class="breadcrumb-item">
            <a class="text-dark" href="#">首页</a>
        </li>
        <li class="breadcrumb-item">
            <a class="text-dark" href="#">明星</a>
        </li>
        <li class="breadcrumb-item">
            <a class="text-dark" href="#">杂志</a>
        </li>
        <li class="breadcrumb-item">
            <a class="text-dark" href="#">论坛</a>
        </li>
    </ul>
    <!-- 介绍 媒体对象-->
    <div class="media bg-white border p-3">
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <img src="img/banner/sec2_right_img.jpg" class="takeaway rounded mr-3 align-self-center"/>
            </div>
            <div class="col-lg-8 col-sm-12">
                <div class="media-body">
                    <h3 class="text-center">品牌导读</h3>
                    <p>Boy London（伦敦男孩）是1976年由Stephane Raynor创立的英伦街牌，受到MCLAREN与维维安·韦斯特伍德的seditionaries(初期vivienneWestwood的店)的影响，开始朋克之路，曾是80年代音乐和服装文化的代名词。</p>
                    <p>成立之初就打上叛逆的标签，不断以一种颠覆性的理念挑战传统的服饰行业，大胆的图案、宽大的T-Shirt剪裁等等都是标志性特征。从充满青春的名字、大大的黑色背景以及“鹰”味十足的LOGO不难看出其潮流、颓废、叛逆的色彩。</p>
                    <p>《爸爸去哪了2》里曹格的白色BOY LONDONT恤就先声夺人，让这个一直以来没有被大众所知的小众潮牌成了不少人关注的焦点。大胆的版画图案，过大的T恤，紧身长裤，你想怎么穿都可以，而且都是男女皆宜。</p>
                    <p>BOYLONDONKOREA拥有童装、SNAKE，还有表现boyrefit遗产口号的Originalheritageline。BOYLONDON固有的MONETONE色调。除此之外还拥有靛蓝、红色等多种颜色商品，与其它品牌不同，BOYLONDON拥有CRAZY模板，及以金、银色为主的多样印花法及配饰。</p>
                </div>
            </div>
        </div>
    </div>
    <!-- 主体内容-->
    <div class="row">
        <div class="col-lg-3 col-sm-12">
            <div class="img-thumbnail">
                <a href="#">
                    <img class="my-img" src="img/section/78bdbc6b2233efad"/>
                </a>
                <div class="carousel">
                    <img class="w-50" src="img/section/star-fill-88x15.png"/>
                    <p>JYP中男孩团BOYSTORY，音乐排行榜人气投票冠军!</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-12">
            <div class="img-thumbnail">
                <a href="#">
                    <img class="my-img" src="img/section/527a5d69e1005b0a"/>
                </a>
                <div class="carousel">
                    <img class="w-50" src="img/section/star-fill-88x15.png"/>
                    <p>JYP中国的BOYSTORY喜欢穿BOY，穿着BOY拍...</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-12">
            <div class="img-thumbnail">
                <a href="#">
                    <img class="my-img" src="img/section/4d0274990b706b30"/>
                </a>
                <div class="carousel">
                    <img class="w-50" src="img/section/star-fill-88x15.png"/>
                    <p>今年最好看的羽绒服就在韩版BOYLONDON</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-12">
            <div class="img-thumbnail">
                <a href="#">
                    <img class="my-img" src="img/section/a7ee9e2ef16467a3"/>
                </a>
                <div class="carousel">
                    <img class="w-50" src="img/section/star-fill-88x15.png"/>
                    <p>将‘Rain(郑智薰)’ BOYLONDON 画报现场...</p>
                </div>
            </div>
        </div>
    </div>
    <div class="m-3"></div>
    <!-- 手风琴效果导航栏-->
    <div id="p1">
        <div class="card">
            <div class="card-header">
                <a href="#c1" class="card-link text-dark" data-toggle="collapse">
                    实体门店
                </a>
            </div>
            <div id="c1" class="collapse show" data-parent="#p1">
                <div class="card-body">
                    <div class="row">
                        <!-- 媒体对象-->
                        <div class="collapse-stores col-lg-6 media border p-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img src="img/section/c3560b0c30e93575" class="footer-media-img rounded mr-3 align-self-center w-100"/>      
                                </div>
                                <div class="col-sm-12">
                                    <h5>林荫树街店</h5>                           
                                    <p>管理者 2018.11.28</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 media border p-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img src="img/section/6dc7d9e870f38d05" class="footer-media-img rounded mr-3 align-self-center w-100"/>
                                </div>
                                <div class="col-sm-12">
                                    <h5>BOYLONDON INTERNATIONAL店</h5>
                                    <p>管理者 2018.11.28</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 media border p-3 ">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img src="img/section/63db0fbab571fab8" class="footer-media-img rounded mr-3 align-self-center w-100"/>
                                </div>
                                <div class="col-sm-12">
                                    <div class="media-body">
                                        <h3>三清店</h3>
                                        <p>管理者 2018.11.28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 media border p-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img src="img/section/0b9cf390c1df8e0f" class="footer-media-img rounded mr-3 align-self-center w-100"/>
                                </div>
                                <div class="col-sm-12">
                                    <div class="media-body">
                                        <h3>济州神话世界免税店</h3>
                                        <p>管理者 2018.11.28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 media border p-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img src="img/section/93a00fbdec850fdb" class="footer-media-img rounded mr-3 align-self-center w-100"/>
                                </div>
                                <div class="col-sm-12">
                                    <div class="media-body">
                                        <h3>明洞2街店  </h3>
                                        <p>管理者 2018.11.28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 media border p-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img src="img/section/444e8e0f336e1380" class="footer-media-img rounded mr-3 align-self-center w-100"/>
                                </div>
                                <div class="col-sm-12">
                                    <div class="media-body">
                                        <h3>济州中央店</h3>
                                        <p>管理者 2018.11.28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 视频播放-->
        <div class="card">
            <div class="card-header">
                <a href="#c2" class="card-link text-dark" data-toggle="collapse">
                    品质保障
                </a>
            </div>
            <div id="c2" class="collapse" data-parent="#p1">
                <div class="container card-body">
                    <video id="v3" class="w-100" src="img/section/2018%20FW%20RAIN%20WITH%20BOYLONDON%20%20微视频-_超清.Ogg" controls autoplay loop poster="img/section/2018 FW RAIN WITH BOYLONDON .jpg">
                        Your browser does not support the audio tag.
                    </video>
                    <!-- <a class="ctr1">   
                        <img src="img/section/play.png" >
                    </a> -->
                </div>
            </div>
        </div>
        <div class="card">
        <div class="card-header">
            <a href="#c3" class="card-link text-dark" data-toggle="collapse">
                关于我们
            </a>
        </div>
        <div id="c3" class="collapse" data-parent="#p1">
            <div class="card-body">
                <img class="w-100" src="img/banner/f953b8662d08ca36f36a4eb42a6bdf64_66703.jpg" alt=""/>
            </div>
        </div>
        </div>
    </div>
    </main>
</template>
<script>
    export default{
    
    }
</script>

<style scoped>
/* 首页导航栏 */
.container .navbar-dark .navbar-brand{
    border: 1px solid #fff;
}
.container .navbar-dark .navbar-brand:hover{
    border-top: 1px solid #fff;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    background-color: rgba(0,0,0,0.2); 
}
.container .header-navbar>ul>li{
    border:1px solid #fff;
}
.container .header-navbar>ul>li:hover{
    border: 1px solid #000;
    background-color: rgba(0,0,0,0.2); 
}
.container #p1 .card #c1 .card-body .row>div>div>div>img{
    opacity: 0.7;
}
.container #p1 .card #c1 .card-body .row>div>div>div>img:hover{
    opacity: 1;
}
</style>