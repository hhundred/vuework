<template>
  <div>
    <div class="register">
      <img src="../../assets/93.jpg" alt="">
      <input type="text" v-model="userName" placeholder="请输入账号">
      <br>
      <input type="password" v-model="password" placeholder="请输入密码">
      <br>
      <input type="password" v-model="repwd" placeholder="请再次输入密码">
      <br>
      <button @click="regHandle">注册</button>
      <br>
      <router-link :to="{name:'login'}">已有账号我要登录</router-link>
    </div>
  </div>
</template>

<script>
import {regApi} from '../../api/user'
import {setToken} from '../../utils/auth'
export default {
data(){
  return{
    userName:'',
    password:'',
    repwd:''
  }
},
methods:{
 async regHandle(){
    if(this.userName&&this.password&&this.repwd){
      if(this.password==this.repwd){
        const res=await regApi({
        userName:this.userName,
        password:this.password,
        })
        console.log(this.userName);
        console.log(this.password);
        if(res.data.code==='success'){
        setToken(this.userName);
        setToken(this.password);
        console.log(this.userName);
        console.log(this.password);
         this.$router.push('/mine')
        }else{
        alert(this.userName,this.password)
        }
            }else 
            {
                alert('两次输入密码不一致')
            }
            }else{
            alert('请输入注册信息')
            }
     }
 }
}
</script>

<style scoped>
.register{
  margin: 0 auto;
}
input,button,a{
  display: block;
  margin:0 auto;
}
input{
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
.register a{
  text-align: center;
  font-size: 14px;
  color: #f67000;
}
.register img{
  text-align: center;
display: block;
  width: 60%;
  margin:3rem auto;
  border-radius: 30%;
}
</style>