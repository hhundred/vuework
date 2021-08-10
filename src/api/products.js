import { post, get } from "../utils/request";
//这里是用来封装调接口的，这一个文件是post，put，get都存在的请求

 /**
  * 获取商品信息
  * @param {*} params
  * @returns
  */
 export const loadProductsApi = (params = {}) => get("/api/v1/products", params);
 
 /**
  * 获取详情
  * @param {*} id
  * @returns
  */
 export const loadProductDetailApi = (id) => get("/api/v1/products/" + id);
 
 /**
  * 加入购物车
  * @param {*} data
  *  product 商品id
  *  amount  数量，如果是减传-1
  *  price   价格
  * @returns
  */
 export const addToCartApi = (data) => post("/api/v1/shop_carts", data);
 
 /**
  * 加载购物车数据
  * @returns
  */
 export const loadCartApi = () => get("/api/v1/shop_carts");
 
 /**
  * 根据id删除购物车数据
  * @param {*} id
  * @returns
  */
  // eslint-disable-next-line no-undef
  export const delFromCartApi = (id) => del("/api/v1/shop_carts/" + id);
 