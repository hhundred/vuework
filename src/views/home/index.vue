<template>
    <div class='home'>
        <!-- 搜索 -->
        <van-search
        v-model="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        />
        <!-- 轮播图---图片懒加载 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image.coverImg" width="100%" height="200px"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 商品展示 v-for="item in products" :key="item._id"-->
        <van-grid :gutter="10">
            <van-grid-item v-for="item in products" :key="item._id" :icon="item.coverImg" :text="item.name">
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import {loadProductsApi} from "../../api/products"

export default {
    components: {},
    data() {
        return {
            images: [
                // 'https://img01.yzcdn.cn/vant/apple-1.jpg',
                // 'https://img01.yzcdn.cn/vant/apple-2.jpg',
            ],
            value:'',//搜索
            products:[]//所有商品
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 获取商品中的图片
        async loadImg(){
            const result = await loadProductsApi({per:5})
            //   console.log(result.data.products);
            this.images=result.data.products
            this.products=result
        },
        // 获取商品
        async loadPro(){
            const result = await loadProductsApi()
            // console.log(result.data.products);
            this.products = result.data.products
        }
    },
    created() {
        this.loadImg()
        this.loadPro()
    },
    mounted() {
    },
}
</script>
<style scoped>
    
</style>