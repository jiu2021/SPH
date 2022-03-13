import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"
const actions = {
  //通过api里面的接口函数调用发送请求
  async categoryList(context, value) {
    let result = await reqCategoryList();
    //console.log(result);
    if (result.code == 200) {
      context.commit("CATEGORYLIST", result.data);
    }
  },
  async getBannerList(context, value) {
    let result = await reqGetBannerList();
    //console.log(result.data, 1);
    if (result.code == 200) {
      context.commit("BANNERLIST", result.data);
    }
  },
  async getFloorList(context, value) {
    let result = await reqGetFloorList();
    //console.log(result.data, 1);
    if (result.code == 200) {
      context.commit("FLOORLIST", result.data);
    }
  }
}

const mutations = {
  CATEGORYLIST(state, value) {
    let categoryList = value;
    categoryList.length = 16;
    state.categoryList = categoryList;
  },
  BANNERLIST(state, value) {
    state.bannerList = value;
    //console.log(value, 2);
  },
  FLOORLIST(state, value) {
    state.floorList = value;
  }
}

const state = {
  //state中数据默认初始值不能任给
  categoryList: [],
  bannerList: [],
  floorList: []
}

const getters = {

}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
}