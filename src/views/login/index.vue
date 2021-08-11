<template>
  <div>
    <div class="login">
      <img src="../../assets/93.jpg" alt="">
    
      <input v-model="userName" type="text" placeholder="请输入账号">
      <br>
      <input v-model="password" type="password" placeholder="请输入密码" name="" id="">
      <br>
      <button @click="clickHandle">登录</button>
      <br>
      <router-link :to="{name:'register'}">没有账号,我要注册</router-link>

    </div>
  </div>
</template>

<script>
import {loginApi} from '../../api/user'
import {setToken} from '../../utils/auth'
export default {
  data(){
    return{
      userName:'',
      password:'',
    }
  },
methods:{
 async clickHandle(){
if(this.userName&&this.password){
const res=await loginApi({
  userName:this.userName,
  password:this.password,
})
  console.log(res);
if(res.data.code==='success'){
   setToken(res.data)
   this.$router.push('/mine')
  }else{
    alert('登录成功')
  }
}else('请输入登录信息')

}
}
}
</script>

<style>
.login{
  margin: 0 auto;
}
.login input,button,a{
  display: block;
  margin:0 auto;
}
.login input{
  width: 60%;
  height:8vw;
}
button{
  color: #fff;
  background: #f67000;
  border:none;
  width: 30vw;
  height: 8vw;
  font-size:1rem ;
}
.login{
  text-align: center;
  font-size: 14px;
  color: #f67000;
}
.login img{
  text-align: center;
display: block;
  width: 60%;
  margin:3rem auto;
  border-radius: 30%;
}
a{color:#f67000;}
</style>