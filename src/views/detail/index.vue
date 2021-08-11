<template>
    <div class='detail'>
        <van-nav-bar
        title="详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-grid :border="false" :column-num="1" >
            <van-grid-item >
                <van-image :src="product.coverImg" @click="loadImg"/>
                {{product.name}}<span style="color:red">￥{{product.price*0.01}}</span>
                库存：{{product.quantity}}
            </van-grid-item>
        </van-grid>
        <!-- <van-sku
            v-model="show"
            :sku="product"
            :goods-id="product._id"
            :quota="0"
            :hide-stock="true"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            /> -->
    </div>
</template>

<script>
import {loadProductDetailApi} from "../../api/products"
import { ImagePreview } from 'vant';
// import { Toast } from 'vant';

export default {
    components: {},
    data() {
        return {
            id:'',
            product:{},
            // show: false,
           
        };
    },
    computed: {},
    watch: {},
    methods: {
        //返回上一层
        onClickLeft() {
            this.$router.go(-1)
        },
        // 获取详情
        async getDetail(id){
            const result = await loadProductDetailApi(id)
            // console.log(result.data);
            this.product = result.data
        },
        loadImg(){
            ImagePreview([this.product.coverImg]);
        },
        //购物车
        // onBuyClicked(){},
        // onAddCartClicked(){},
    },
    created() {
        this.id = this.$route.params.id
        // console.log(this.id);
        this.getDetail(this.id)
    },
    mounted() {
    },
}
</script>
<style scoped>
    
</style>