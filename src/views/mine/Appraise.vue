<template>
    <div class='Appraise'>
     <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="我的评价"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
  <van-cell title="小小鼠标垫" value="￥129" label="" />
  <van-cell value="我的评价：很好用也很好看呀，强烈推荐。" label="" />
  <br>
    <van-cell title="redmibook Pro 14" value="￥4499" label="" />
  <van-cell value="我的评价：颜值超高的一款商务本，我买的灰色的，很好看"/>

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
    
</style>