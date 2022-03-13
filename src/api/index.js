//当前模块进行api统一管理
import requests from "./request";
import mockRequests from './mockAjax'
//三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'get'
})

export const reqGetSearchInfo = (params) => requests({
  url: '/list',
  method: 'post',
  data: params
})

export const reqGetBannerList = () => mockRequests({
  url: '/banner',
  method: 'get'
})

export const reqGetFloorList = () => mockRequests({
  url: '/floor',
  method: 'get'
})

//验证码
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'get'
})

//注册
export const reqUserRegister = (data) => requests({
  url: `/user/passport/register`,
  data,
  method: 'post'
})

//登录
export const reqUserLogin = (data) => requests({
  url: `/user/passport/login`,
  data,
  method: 'post'
})

//获取用户信息
export const reqUserInfo = () => requests({
  url: `/user/passport/auth/getUserInfo`,
  method: 'get'
})

//退出登录
export const reqLogout = () => requests({
  url: `/user/passport/logout`,
  method: 'get'
})