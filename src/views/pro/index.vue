<template>
    <div class='pro'>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>
    </div>
</template>

<script>
import {loadProductsKindApi} from "../../api/products"

export default {
    components: {},
    data() {
        return {
            activeKey: 0,
        };
    },
    computed: {},
    watch: {},
    methods: {
        async loadProKind(){
            const result = await loadProductsKindApi()
            console.log(result);
        }
    },
    created() {
    },
    mounted() {
    },
}
</script>
<style scoped>
    
</style>