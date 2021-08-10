<template>
  <div class="info">
    <img class="avatar" src="../../assets/93.jpg" alt="头像">
    <p>{{users.nickName?users.nickName:'西楼'}}</p>
    <br>
    <router-link class="link-to"><span>我的钱包</span><i>4900.0</i></router-link>

      <van-cell title="" value="4900.0" label="我的钱包" />

    <router-link class="link-to" :to="{name:'Collect'}"><span>我的收藏</span><i>></i></router-link>
    <router-link class="link-to" :to="{name:'Address'}"><span>地址管理</span><i>></i></router-link>
    <router-link class="link-to" :to="{name:'Appraise'}"><span>我的评价</span><i>></i></router-link>
    <router-link class="link-to" :to="{name:'ChangeInfo',
    query:{
      nickName:users.nickName,
      avatar:users.avatar}}">
      <span>个人信息修改</span><i>></i></router-link>
  <button style="background:gray;" @click="logOut">退出登录</button>
  </div> 
</template>

<script>
// import {loadUserInfoApi} from '../services/auth'
import {loadUserInfoApi,removeToken} from '../../utils/auth'
export default {
data(){
  return{
    user:{}
  }
},
async created(){
  const res=await loadUserInfoApi()
  this.user=res.data;
},
methods:{
  logOut(){
    removeToken('token');
    this.$router.push({
      name:'login'
    })
  }
}
}
</script>

<style scoped>
.info{
  display: flex;
  align-items: center;
  justify-content:center ;
  flex-direction: column;
  overflow-y: auto;
}
.avatar{
  margin: 1rem  auto;
  width: 40vw;
  height: 40vw;
  border-radius: 20%;
}
button{
  border: none;
  color: #fff;
  width: 30vw;
  height: 10vw;
}
a{
  color: rgb(139, 138, 138);
}
.link-to{
  width: 97%;
  border-bottom: 1px solid;
  /* border: 1px solid; */
  line-height: 1.5rem;
  padding: .3rem .4rem;
  margin: 0.2rem auto;

}
i{
  font-style: normal;
  float: right;
}
em{
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  width: 10vw;
  height: 10vw;
  z-index: 10;
}
.van-cell__label {
    margin-top:4px;
    color: #969799;
    font-size: 18px;
    line-height: 18px;
    margin-left: -8px;}
    .van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 18px;
    line-height: 24px;
    background-color: #fff;
}
</style>