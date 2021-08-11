<template>
    <div class='reg'>
        <van-nav-bar title="登录" />
        <!-- 登录 -->
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Toast } from 'vant';
//引入登录api
import {loginApi} from "../../api/user"
import {setToken} from "../../utils/auth"

export default {
    components: {},
    data() {
        return {
            username: '',
            password: '',
            nickName:'',
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        //表单提交---vant提供
        async onSubmit(values){
            //values：提交的用户名，密码对象
            // console.log('submit', values);
            //...将value对象扒皮            
            const result = await loginApi({...values})
            // console.log(result)
            if(result.data.code=="success"){
                // console.log(result.data.token);
                setToken(result.data.token)
                Toast.success("登陆成功")
                this.$router.push("/home")
            } else{
                Toast.fail(result.data.message)
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
    
</style>