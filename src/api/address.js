import {get } from "../utils/request";

/**
  * 收货地址列表
  * @returns
  */
 export const addressesListApi = () => get("/api/v1/addresses");
 
 /**
  * 收货地址新增
  * @returns
  */
  export const addressesApi  = () => get("/api/v1/addresses");
 
/**
  * 收货地址修改
  * @returns
  */
    export const modifyaddressesApi  = () => get("/api/v1/addresses/:id");
 
/**
  * 收货地址删除
  * @returns
  */
        export const deladdressesApi  = () => get("/api/v1/addresses/:id");
 
/**
  * 获取单条收货地址
  * @returns
  */
         export const oneaddressesApi  = () => get("/api/v1/addresses/:id");
 