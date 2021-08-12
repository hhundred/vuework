<template>
  <div class="cart">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="我的购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe-cell v-for="value in carts" :key="value._id">
      <!-- 单选按钮 -->
        <!-- <template #tag>
          <van-checkbox v-model="value.checked" />
        </template> -->

      <van-card
        :num="value.quantity"
        :price="value.product.price*0.01"
        :title="value.product.name"
        :thumb="value.product.coverImg"
      >
      <!-- 数量加减 -->
        <!-- <template #footer>
          <van-stepper
            v-model="value.quantity"
            @plus="plusHandle(value)"
            @minus="minusHandle(value)"
          />
        </template> -->
        
      </van-card>
      <!-- 右滑删除按钮 -->
      <!-- <template #right>
        <van-button
          @click="delFromCart(value._id)"
          square
          text="删除"
          type="danger"
          class="delete-button"
        />
      </template> -->
    </van-swipe-cell>

    <!-- <van-submit-bar :price="sumPrice * 100" button-text="提交订单">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import {
  loadCartApi,
  delFromCartApi,
} from "../../api/products";
  // addToCartApi,

export default {
  name: "cart",
  data() {
    return {
      carts: [],
    };
  },
  computed: {
    // checkAll: {
    //   set(v) {
    //     this.carts.forEach((value) => (value.checked = v));
    //   },
    //   get() {
    //     return this.carts.every((value) => value.checked);
    //   },
    // },
    // sumPrice() {
    //   return this.carts
    //     .filter((value) => value.checked)
    //     .reduce((pre, cur) => pre + cur.price * cur.amount, 0);
    // },
  },
  created() {
    this.loadData();
  },
  methods: {
    //获取购物车列表
    async loadData() {
      const res = await loadCartApi();
      console.log(res.data);
      this.carts = res.data
    },
    //购物车删除
    async delFromCart(id) {
      await delFromCartApi(id);
      await this.loadData();
      Toast.success("删除成功");
    },
    //购物车数量增加  刷新不变
    // async plusHandle(value) {
    //   await addToCartApi({
    //     product: value.product.id,
    //     quantity: 1,
    //   });
    // },
    // 购物车数量减少  刷新不变
    // async minusHandle(value) {
    //   await addToCartApi({
    //     product: value.product.id,
    //     price: value.product.price,
    //     amount: -1,
    //   });
    // },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
    .delete-button {
      height: 100%;
    }
</style>