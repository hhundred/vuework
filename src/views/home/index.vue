<template>
    <div class='home'>
        <!-- 搜索 -->
        <form action="/">
            <van-search
                v-model="keywords"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        <!-- 轮播图---图片懒加载 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image.coverImg" width="100%" height="200px"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 商品展示 v-for="item in products" :key="item._id"-->
        <van-grid :border="false" :column-num="4">
            <van-grid-item to="/pro">
                <van-icon name="hot-sale" size="40" color="red"/>排行榜
            </van-grid-item>
            <van-grid-item to="/pro">
                <van-icon name="medal" size="40" color="orange"/>品牌
            </van-grid-item>
            <van-grid-item to="/mine">
                <van-icon name="lock" size="40" color="lightblue"/>安全
            </van-grid-item>
            <van-grid-item to="/pro">
                <van-icon name="more" size="40" color="yellowgreen"/>更多
            </van-grid-item>
        </van-grid>
        <!-- 倒计时 -->
        <van-divider :style="{ color: '#000', borderColor: '#1989fa', padding: '0 5px' }">
            抢购倒计时：
            <van-count-down :time="time">
                <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
            <!-- <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" /> -->
        </van-divider>
        <van-grid :border="false" :column-num="3" >
            <van-grid-item v-for="item in daoproducts" :key="item._id" @click="godetail(item._id)">
                <van-image :src="item.coverImg" />
                <span>{{item.name}}</span>
                <span style="color:red">￥{{item.price*0.01}}</span>
            </van-grid-item>
        </van-grid>
        <van-divider content-position="left">
            <van-tag type="success">新品</van-tag>
        </van-divider>
        <van-grid :border="false" :column-num="2" >
            <van-grid-item v-for="item in products" :key="item._id" @click="godetail(item._id)">
                <van-image :src="item.coverImg" />
                {{item.name}}<span style="color:red">￥{{parseInt(item.price*0.01)}}</span>
            </van-grid-item>
        </van-grid>
        
        </form>

    </div>
</template>

<script>
import {loadProductsApi} from "../../api/products"
import { Toast } from 'vant'
export default {
    components: {},
    data() {
        return {
            images: [
                // 'https://img01.yzcdn.cn/vant/apple-1.jpg',
                // 'https://img01.yzcdn.cn/vant/apple-2.jpg',
            ],
            keywords:'',//搜索
            products:[],//所有商品
            daoproducts:[],//倒计时商品
            time: 30 * 60 * 60 * 1000,
            
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 获取商品中的图片---轮播图
        async loadImg(){
            const result = await loadProductsApi({per:5,page:2})
            //   console.log(result.data.products);
            this.images=result.data.products
            this.products=result
        },
        // 倒计时---商品展示
        async loadDaoPro(){
            const result = await loadProductsApi({per:3,page:4})
            // console.log(result.data.products);
            this.daoproducts = result.data.products
        },
        // 搜索
        onSearch(keywords){
            Toast(keywords);
            // console.log(this.products)
            this.products = this.products.filter(item=>{
                if(item.name.includes(keywords)){
                    return item
                }
            })
            return this.products
        },
        //取消搜索
        onCancel(){
            Toast('取消');
        },
        // 获取商品---商品展示
        async loadPro(){
            const result = await loadProductsApi({per:8})
            // console.log(result.data.products);
            this.products = result.data.products
        },
        //详情
        godetail(id){
            // alert(id)
            this.$router.push('/detail/'+id)
        },
        
        
    },
    created() {
        this.loadImg()
        this.loadDaoPro()
        this.loadPro()
    },
    mounted() {
    },
}
</script>
<style scoped>
    .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
   .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
  span{
      font-size: 14px;
  }
</style>