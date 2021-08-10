<template>
  <div id="app">
    <transition mode="out-in">
        <router-view></router-view>
    </transition>
    <van-tabbar v-model="active" route v-if="this.$route.meta.tabbar">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/pro">商品</van-tabbar-item>
      <van-tabbar-item icon="cart-circle-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      active: 0,
    };
  },
  components: {
  }
}
</script>

<style >
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(100%); /*位移100%，全部移出*/
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease;
  }
</style>
