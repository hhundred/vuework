<template>
    <div class='collect'>
        <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="收藏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
     <van-cell-group>
  <van-cell title="小小鼠标垫" value="￥89" label="库存:131" />
  <div class="collect-btn">
  <van-button type="info">取消收藏</van-button>
  <van-button type="danger">立即购买</van-button>
  <van-button type="warning">加入购物车</van-button>
  </div>
</van-cell-group>
  </div>
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            
        };
    },
    computed: {},
    watch: {},
    
    methods: {
          onClickLeft() {
           this.$router.go(-1);
         },
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
.collect-btn{
display: flex;
align-items: center;
justify-content: space-around;

}
</style>