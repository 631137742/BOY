import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

// 0.1:引入Vuex
import Vuex from "vuex"
// 0.2:注册Vuex组件
Vue.use(Vuex)
// 0.3:创建store
// var store = new Vuex.Store({
//   state:{
//     cartCount:sessionStorage.getItem("cartCount")||0  //共享数据:购物车中商品数量
//   },
//   mutations:{
//     //购物车中数据加1  点击商品详情[加入购物]
//     increment(state){
//       state.cartCount++;    //全局数据 修改 获取
//     },
//     //显示购物车列表时
//     updateCount(state,count){
//       state.cartCount=count;
//       sessionStorage.setItem("cartCount",count);
//     }
//   },
//   getters:{
//     optCartCount:function(state){
//       return state.cartCount;
//     }
//   }
// })
// // 0.9: 69行 line将store对象添加Vue实例成为一个属性


Vue.config.productionTip = false


//配置跨域访问保存session
// axios.defaults.withCredentials=true;

Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
