<template>
    <div class='reg'>
        <van-nav-bar title="注册" />
        <!-- 上传图片 -->
        <span>上传头像</span>
        <van-uploader :after-read="afterRead" />
        <!-- 显示图片 -->
        <img :src="imgUrl" alt="" width="200px" height="200px" v-if="imgUrl">
        <!-- 注册 -->
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="userName"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="nickName"
                name="nickName"
                label="昵称"
                placeholder="昵称"
                :rules="[{ required: true, message: '请填写昵称' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">注册</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
//引入注册api
import {regApi} from "../../api/user"
// 引入vant提供的Toast
import {Toast} from "vant"

export default {
    components: {},
    data() {
        return {
            username: '',
            password: '',
            imgUrl:'',
            nickName:'',
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        // vant提供---上传文件中的回调函数，获取到对应的 file 对象
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            // console.log(file);
            this.imgUrl = file.content
        }, 
        //表单提交---vant提供
        async onSubmit(values){
            //values：提交的用户名，密码，昵称对象
            // console.log('submit', values);
            //...将value对象扒皮
            //判断无图片提示需上传图片---使用vant中的Toast轻提示
            if(this.imgUrl){
                const result = await regApi({...values,avatar:this.imgUrl})
                console.log(result)
                if(result.data.code=="success"){
                    Toast("注册成功")//弹框提示
                    this.$router.push("/login")
                }
            }else{
                //使用失败提示
                Toast.fail("请上传头像")
            }
        },
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    span{
      font-size: 14px;
      color: #333;
      margin:0 40px 0 15px;
    }
    img{
      display: block;
      margin: 0 auto;
    }
</style>