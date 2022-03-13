import Vue from 'vue'
import App from './App.vue'
//引入三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
//第一个参数：全局组件的名字 第二个参数：那一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
  //引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//引入MockServe
import '@/mock/mockServe'
//引入样式
import "swiper/css/swiper.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由，组件上多了$route\$router属性
  router,
  //注册仓库，组件上多了$store属性
  store
}).$mount('#app')