<template>
    <div class='Appraise'>
     <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="我的评价"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    /></div>
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