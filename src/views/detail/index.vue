<template>
    <div class='detail'>
        <van-nav-bar
        title="详情"
        left-text="返回"
        right-text="查看大图"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-grid :border="false" :column-num="1" >
            <van-grid-item >
                <van-image :src="product.coverImg" @click="loadImg"/>
                <div class="text">
                    <!-- 优惠券单元格 -->
                    <van-coupon-cell
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        @click="showList=true"
                    />
                    <!-- 优惠券列表 -->
                    <van-popup
                        v-model="showList"
                        round
                        position="bottom"
                        style="height: 90%; padding-top: 4px;"
                        >
                        <van-coupon-list
                            :coupons="coupons"
                            :chosen-coupon="chosenCoupon"
                            :disabled-coupons="disabledCoupons"
                            @change="onChange"
                            @exchange="onExchange"
                        />
                    </van-popup>
                    <van-tag type="danger" round >天猫</van-tag>&nbsp;
                    <van-tag type="danger" round >双十一</van-tag>&nbsp;
                    <van-tag plain type="primary">库存{{product.quantity}}</van-tag>
                    {{product.name}}
                    
                    <span style="color:red">￥{{product.price*0.01}}</span>
                </div>
            </van-grid-item>
        </van-grid>
        <!-- 底部导航栏 -->
        <van-goods-action>
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-icon icon="chat-o" text="客服" color="blue" />
            <van-goods-action-icon icon="star" text="收藏" color="#ff5000" @click="onClickIcon"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="addcart(product._id)"/>
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
import {loadProductDetailApi,addToCartApi} from "../../api/products"
import { ImagePreview } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';

const coupon = {
  available: 1,
  condition: '可叠加使用',
  reason: '',
  value: 5000,
  name: '满500减50',
  startAt: new Date(),
  endAt: new Date(),
  valueDesc: '50',
  unitDesc: '元',
};

export default {
    components: {},
    data() {
        return {
            id:'',
            product:{},
            showList:false,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
        };
    },
    computed: {},
    watch: {},
    methods: {
        //返回上一层
        onClickLeft() {
            this.$router.go(-1)
        },
        // 查看大图
        onClickRight() {
            ImagePreview([this.product.coverImg]);
        },
        // 获取详情
        async getDetail(id){
            const result = await loadProductDetailApi(id)
            // console.log(result.data);
            this.product = result.data
        },
        // 点击图片查看大图
        loadImg(){
            ImagePreview([this.product.coverImg]);
        },
        // 加入购物车
        async addcart(id){
            const result = await addToCartApi(id)
            console.log(result);
            if(result.data.code=="success"){
                Dialog.confirm({
                title: '加入购物车成功',
                message: '点击确认将跳转到购物车列表',
                })
                .then(() => {
                    this.$router.push("/cart") 
                })
                .catch(() => {
                    
                });
            }
        },
        // 优惠券
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
            this.coupons.push(coupon);
            console.log(code);
        },
        // 底部导航栏
        onClickIcon() {
            Toast('收藏成功');
        },

        
        
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