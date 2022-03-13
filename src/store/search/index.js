import { reqGetSearchInfo } from "@/api"
const actions = {
  //通过api里面的接口函数调用发送请求
  async getSearchList(context, value = {}) {
    //value参数至少是一个空对象
    let result = await reqGetSearchInfo(value);
    console.log(value);
    //console.log(value, 1);
    //console.log(result, 2);
    if (result.code == 200) {
      context.commit("SEARCHLIST", result.data);
    }
  }
}

const mutations = {
  SEARCHLIST(state, value) {
    state.searchList = value;
  }
}

const state = {
  //state中数据默认初始值不能任给
  searchList: {}
}

const getters = {
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
}