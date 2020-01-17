<template>
  <main id="main" class="container">
      <!-- 商品详情-->
      <!-- 面包屑导航-->
      <ul class="title-ul breadcrumb bg-menubar m-0">
          <li class="breadcrumb-item">
              <router-link class="text-dark" to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item">
              <router-link class="text-dark" to="/products/1">商品</router-link>
          </li>
          <li class="breadcrumb-item">
              <a class="text-dark" href="#">杂志</a>
          </li>
          <li class="breadcrumb-item">
              <a class="text-dark" href="#">论坛</a>
          </li>
      </ul>
      <div class="row p-3">
          <!-- 图片详情-->
          <div class="card col-md-6 col-sm-12">
              <img class="my-big pb-2 pt-2 card-img-top" :src="pics[i].lg" alt="Card image cap"/>
              <div>
              <ul class="list-unstyled d-flex text-center" :style="{'margin-left':ulMarginLeft,width:ulWidth}">
                  <li :key="i" v-for="(p,i) of pics">
                      <img :src="p.sm" @mouseover="change(i)" class="my-small border border-dark" />
                  </li>
              </ul>
              </div>
          </div>
          <!--<script>-->
          <!--$(".my-small").click(function(){-->
                  <!--var $img=$(this);-->
                  <!--var src=$img.attr("data-target");-->
                  <!--$(".my-big").attr({src});-->
              <!--})-->
          <!--</script>-->
          <!-- 商品信息-->
          <div class="col-md-6 col-sm-12">
              <div class="p-0">
                  <h5 class="border-bottom border-dark mb-4">{{product.lname}}</h5>
                  <h6 class="mt-4">商品代码<span class="ml-5">{{product.subtitle}}</span></h6>
                  <h6 class="mt-4">商品库存<span class="ml-4">{{product.sold_count}}个</span></h6>
                  <h6 class="mt-4">限制购买<span class="ml-4">最少 1件</span></h6>
                  <h6 class="mt-4">尺码<span class="ml-4">均码</span></h6>
                  <div class="alert alert-secondary mt-5">
                      <span class="mr-3">售价</span>
                      <h5 class="d-inline">CNY{{product.price.toFixed(2)}}</h5>
                  </div>
                  <!-- 商品购买-->
                  <div class="clearfix">
                      <div class="float-left my_small mt-1 mr-3">颜色选择:</div>
                      <div class="float-left w-75">
                          <a class="btn btn-sm my_gray btn-outline-dark" href="#">{{product.spec}}</a>
                          <a class="btn btn-sm my_gray btn-outline-dark" href="#">白色</a>
                          <a class="btn btn-sm my_gray btn-outline-dark" href="#">黑白色</a>
                      </div>
                  </div>
                  <!-- 购买数量-->
                  <div id="buttons" class="clearfix mt-3">
                      <div class="float-left mt-1 mr-3">数量:</div>
                      <div class="float-left d-flex align-items-center ml-1">
                          <button class="btn border-0 rounded-0" @click="goodSub">-</button>
                          <span class="border border-dark text-center">{{val}}</span>
                          <button class="btn border-0 rounded-0" @click="goodAdd">+</button>
                      </div>
                  </div>
                  <!-- 购物车 收藏 立即购买-->
                  <div class="float-left mt-5">
                      <a class="btn btn-outline-dark my-btn-buy h3 pt-3 m-1" href="#">购物车</a>
                      <a class="btn btn-outline-dark my-btn-buy h3 pt-3 m-1" href="#">收藏</a>
                      <a class="btn btn-outline-dark my-btn-buy1 h3 pt-3 m-1" href="#">立即购买</a>
                  </div>
              </div>
          </div>
      </div>
      <h3>商品详细信息</h3>
      <div class="row">
          <div class="col-12">
              <img :src="pics[0].bba"/>
          </div>
          <div class="col-12">
              <img :src="pics[0].detail"/>
          </div>
          <div class="col-12 mt-3">
              <h5 class="font-weight-bold mb-3">配送指南</h5>
              <p class="my_gray my_small">- 如果是海外运费，根据产品的种类、重量（含箱子重量）、数量出现不同。</p>
              <p class="my_gray my_small">- 产品的配送日期从订购后需要5~10个工作日，由于国际快递的特性，可能会需要更长时间，敬请谅解。</p>
              <p class="my_gray my_small">- 付款后立即进行配送，如需交换或取消，请联系卖家。</p>
              <p class="my_gray my_small">- 关税和税款由收货人支付，公司概不负责。由此相关，运费等所需的费用会从退款金额中扣除。</p>
          </div>
          <div class="col-12 mt-5">
              <h5 class="font-weight-bold mb-3">交换及退货指南</h5>
              <p class="my_gray my_small">付款后取消、交换、退货，请联系客服后执行。</p>
              <p class="my_gray my_small">- 因客户的变心导致的交换、退货等，需要客户支付运费。</p>
              <p class="my_gray my_small">（产品的瑕疵、配送错误等除外）</p>
              <p class="my_gray my_small">- 但是，以下情况收到之日起7天内也不能进行交换、退货，敬请谅解。</p>
              <p class="my_gray my_small">* 取下产品标签（tag）或打开包装以及丢失或损坏产品包装盒导致损坏产品价值的情况</p>
              <p class="my_gray my_small">* 鞋类产品，有在室外穿戴或使用痕迹的情况</p>
              <p class="my_gray my_small">* 各别定制产品（鞋跟高度、脚宽、大小更改）手工鞋</p>
              <p class="my_gray my_small">* 部分特价产品不能进行交换、退货，请仔细阅读产品的详细信息。</p>
          </div>
          <div class="col-12"></div>
      </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      product:{
        title:"",
        subtitle:"",
        price:0,
        promise:"",
        sold_count:"",
        spec:""
      },
      val:1,
      pics:[{sm:"",md:"",lg:"",bba:"",detail:""}],
      specs:[],
      ulWidth:0,//小图片列表的宽
      moved:0,//已经左移的li的个数
      i:0,//默认显示第几张图片
      show:false,//控制mask和lgDiv的显示和隐藏
      maskStyle:{
        top:0,
        left:0
      }
    }
  },
  computed:{
    bgPosition(){
      return `-${parseFloat(this.maskStyle.left)*16/7}px -${parseFloat(this.maskStyle.top)*16/7}px`
    },
    ulMarginLeft(){
      return this.moved*-62+"px"
    }
  },
  created(){
    this.loadDetails();
  },
  methods:{
    goodAdd(){
        this.val++;
        },
        goodSub(){
        if(this.val > 1){
            this.val--;
        }
    },
    dong(e){
      var top=e.offsetY-175/2;
      var left=e.offsetX-175/2;
      if(top<0) top=0;
      else if(top>175) top=175;
      if(left<0) left=0;
      else if(left>175) left=175;
      this.maskStyle.top=top+"px";
      this.maskStyle.left=left+"px";
    },
    toggle(bool){
      this.show=bool;
    },
    change(i){
      this.i=i;
    },
    move(i){
      if(i==-1&&this.moved!=0
          ||i==1&&this.moved<this.pics.length-4)
        this.moved+=i;
    },
    loadDetails(){
      this.axios.get(
        "http://localhost:3000/details",{
          params:{
            lid:this.$route.params.lid
          }
        }
      ).then(res=>{
        console.log(res.data);
        this.product=res.data.product;
        this.pics=res.data.pics;
        // this.ulWidth=this.pics.length*62+"px";
        this.moved=0;
        this.i=0;
        this.show=false;
        this.specs=res.data.specs;
      })
    }
  },
  watch:{
    "$route":function(){
      this.loadDetails();
    }
  }
}
</script>

<style scoped>
.title-ul{
    /* position: absolute;
    left: 0rem; */
}
</style>