<template>
    <main id="main" class="container">
        <div>
            <img src="img/banner/2b72db983bb449c00141bb357be91d97_53151.jpg"/>
        </div>
        <!-- 商品详情-->
        <div class="list-goods row bg-white">
            <div class="col-md-9 col-sm-12">
                <h6 class="rounded-bottom bg-menubar p-2">上衣</h6>
                <div id="buttons" class="row bg-white m-0">
                    <!-- 商品1-->
                    <div class="col-md-4 col-sm-6 p-0" v-for="(item,i) in products.slice(0,9)" :key="item.lid">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/${i+1}`" class="card">
                                    <img class="img-fluid card-img-top" :src="item.pic" data-holder-rendered="true" />
                                </router-link>
                            </div>
                            <!-- 价格信息-->
                            <h5 class="border-bottom border-dark base_color m-2">{{item.title}}</h5>
                            <a class="my_gray my_small m-2" href="#">CNY{{item.price}}</a>
                            <!-- 按钮-->
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input" @click="goodSub(i)">-</button>
                                    <!-- <input class="border border-dark w-25" type="number" v-model="val"> -->
                                    <span class="border border-dark">{{item.count}}</span>
                                    <button class="btns w-input" @click="goodSubs(i)">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div>
                    <!-- 商品2-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/2`" class="card">
                                    <img class="img-fluid" :src="products[1].pic" data-holder-rendered="true"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品3-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/3`" class="card">
                                    <img class="img-fluid" :src="products[2].pic" data-holder-rendered="true"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品4-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/4`" class="card">
                                    <img class="img-fluid" :src="products[3].pic" data-holder-rendered="true"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品5-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/5`" class="card">
                                    <img class="img-fluid" :src="products[4].pic"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品6-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/6`" class="card">
                                    <img class="img-fluid" :src="products[5].pic"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品7-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/7`" class="card">
                                    <img class="img-fluid" :src="products[6].pic"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品8-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/8`" class="card">
                                    <img class="img-fluid" :src="products[7].pic"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- 商品9-->
                    <!-- <div class="col-md-4 col-sm-6 p-0">
                        <div>
                            <div class="card m-2">
                                <router-link :to="`/details/9`" class="card">
                                    <img class="img-fluid" :src="products[8].pic"/>
                                </router-link>
                            </div>
                            <h5 class="border-bottom border-dark base_color m-2">B71HD06U</h5>
                            <a class="my_gray my_small m-2" href="#">CNY660</a>
                            <div class="d-flex align-items-center justify-content-between pb-2 m-2">
                                <div class="w-75 pl-1">
                                    <button class="btns w-input">-</button>
                                    <span class="border border-dark">1</span>
                                    <button class="btns w-input">+</button>
                                </div>
                                <a class="btn btn-dark cart-btn" href="#">加入购物车</a>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- 分页-->
                <div class="list-goods-paging bg-menubar">
                    <ul class="pagination justify-content-end p-2">
                        <li class="page-item disabled">
                            <a class="page-link" href="#">上一页</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">4</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">5</a>
                        </li>
                        <li class="page-item disabled">
                            <!-- <a class="page-link" href="#">下一页</a> -->
                            <input class="page-link" type="button" value="下一页" @click="getMore">
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 商家公告-->
            <div class="col-md-3 col-sm-12">
                <h6 class="bg-menubar bg-menubar p-2 mb-0"><img class="mygg-img mr-2" src="img/section/caution-1.png"/>&nbsp;商家公告</h6>
                <div class="base_color p-1">
                    <p>配送指南</p>
                    <p>- 如果是海外运费，根据产品的种类、重量（含箱子重量）、数量出现不同。</p>
                    <p>- 产品的配送日期从订购后需要5~10个工作日，由于国际快递的特性，可能会需要更长时间，敬请谅解。</p>
                    <p>- 付款后立即进行配送，如需交换或取消，请联系卖家。</p>
                    <p>- 关税和税款由收货人支付，公司概不负责。由此相关，运费等所需的费用会从退款金额中扣除。</p>
                </div>
                <!-- 购物车-->
                <ul class="list-group mt-5">
                    <li class="list-group-item d-flex my-small
                    justify-content-between bg-menubar p-1 border-0">
                        <p class="mb-0 my-gray">购物车</p>
                        <a href="#" class="my-gray">清空</a>
                    </li>
                    <li class="list-group-item d-flex
                    my-small justify-content-start p-0">
                        <span class="input-group-text
                        bg-white p-0 pl-1 border-0 text-truncate ">B71HD06U</span>
                        <button class="btn
                        border-0 bg_floor text-white text-center p-0 my_cart_btn">-</button>
                        <input class="form-control
                        border-0 my_input-w" type="text" value="1"/>
                        <button class="btn
                        border-0 bg_floor text-white text-center p-0 my_cart_btn">+</button>
                        <span class="input-group-text bg-white p-0 border-0">￥600.00</span>
                    </li>
                    <li class="list-group-item p-0 d-flex
                    justify-content-between bg-secondary">
                        <h5 class="text-white pt-2 pl-1">
                            <img class="mygg-img mr-2" src="img/section/add-cart-success.png" alt=""/>￥5999.00
                        </h5>
                        <a href="#" class="text-white
                        bg-dark pt-2">去结算</a>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data:function(){
        return {//data
            pno:0, //分页
            pageSize:4,
            list:[],
            product:{
                title:"",
                subtitle:"",
                price:0,
                promise:"",
                sold_count:"",
                spec:"",
                lname:""
            },
            products:[
              /*[0]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[1]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[2]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[3]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[4]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[5]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[6]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[7]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              },
              /*[8]*/{
                title: "",
                details: "",
                price: "",
                href: "",
                pic: "",
                count:1
              }
            ]
        }
    },
    methods:{
        goodSub(i){
            this.products[i].count--
            if(this.products[i].count==0){
                this.products[i].count=1;
            }
        },
        goodSubs(i){
            this.products[i].count++
        },
        getMore(){
            this.pno++;
            var url = "http://localhost:3000";
                url+="/products?pno="+this.pno
                url+="&pageSize="+this.pageSize;
            this.axios.get(url).then(result=>{
                var rows = this.list.concat(result.data.data);
                this.list = rows;
            })
        }
    },
    //组件间跳转 默认在顶部
    mounted(){
        this.$router.afterEach((to,from,next)=>{
            window.scrollTo(0,0)
        })
    },
    //当data对象创建后自动触发
    created:function(){
        this.axios.get(
            "http://localhost:3000/products"
        ).then(res=>{
            console.log(res.data);
            this.products=res.data;
        }),
        this.getMore();
    }
}
</script>

<style scoped>
</style>