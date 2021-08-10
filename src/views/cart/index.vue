<template>
  <div class="cart">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe-cell v-for="value in carts" :key="value.id">
      <van-card
        :num="value.amount"
        :price="value.product.jdPrice"
        :title="value.product.name"
        :thumb="value.product.image | dalImg"
      >
        <template #tag>
          <van-checkbox v-model="value.checked" />
        </template>
        <template #footer>
          <van-stepper
            v-model="value.amount"
            @plus="plusHandle(value)"
            @minus="minusHandle(value)"
          />
        </template>
      </van-card>
      <template #right>
        <van-button
          @click="delFromCart(value.id)"
          square
          text="删除"
          type="danger"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>

    <van-submit-bar :price="sumPrice * 100" button-text="提交订单">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import {
  loadCartApi,
  addToCartApi,
  delFromCartApi,
} from "";
export default {
  name: "cart",
  data() {
    return {
      carts: [],
    };
  },
  computed: {
    checkAll: {
      set(v) {
        this.carts.forEach((value) => (value.checked = v));
      },
      get() {
        return this.carts.every((value) => value.checked);
      },
    },
    sumPrice() {
      return this.carts
        .filter((value) => value.checked)
        .reduce((pre, cur) => pre + cur.price * cur.amount, 0);
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await loadCartApi();
      this.carts = res.data.map((value) => ({
        ...value,
        checked: false,
      }));
    },
    //购物车删除
    async delFromCart(id) {
      await delFromCartApi(id);
      this.loadData();
      Toast.success("删除成功");
    },
    //购物车数量增加  刷新不变
    async plusHandle(value) {
      await addToCartApi({
        product: value.product.id,
        price: value.product.price,
        amount: 1,
      });
    },
    //购物车数量减少  刷新不变
    async minusHandle(value) {
      await addToCartApi({
        product: value.product.id,
        price: value.product.price,
        amount: -1,
      });
    },
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