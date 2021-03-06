import {get,post} from "../utils/request"
/**
 * 注册
 * @param {*} data
 * @returns
 */
 export const regApi = (data) => post("/api/v1/auth/reg", data);
 // 注册的post请求 传入一个data作为参数
 
 /**
  * 登录
  * @param {*} data
  * @returns
  */
 export const loginApi = (data) => post("/api/v1/auth/login", data);
 //登录的post请求
 
 /**
  * 修改个人信息
  * @param {*} data
  * @returns
  */
//  export const modifyInfoApi = (data) => put("/api/v1/users/change_info", data);
 //修改信息的pot请求
 
 /**
  * 修改密码
  * @param {*} data
  * @returns
  */
//  export const changePwdApi = (data) => put("/api/v1/users/change_pwd", data);
 // 修改密码的put请求
 
 
 /**
  * 获取用户信息
  * @returns
  */
 export const loadUserInfoApi = () => get("/api/v1/users/info");
 // 获取用户信息的get请求
 
 