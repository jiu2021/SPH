//该文件用于创建Vuex中最核心的store

//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//引入小仓库
import home from './home'
import search from './search'
import user from './user';
//创建并暴露store
export default new Vuex.Store({
  //实现Vuex仓库模块化开发
  modules: {
    home,
    search,
    user
  }
})