<template>
  <div class="info">
     <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="修改信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <input type="file" style="display:none;" @change="selendHandle" ref="file">
    <img 
    @click="selImg" 
    class="avatar" 
    :src="avatar" 
    alt="点击头像更改头像"
    v-if="avatar">
    <img v-else class="avatar " @click="selImg" :src="uploadPng" alt="">
    <input type="text" v-model="nickName" placeholder="请输入昵称">
    <button @click="saveHandle">保存</button>
  </div>

</template>

<script>
import uploadPng from '../../assets/93.jpg'
import {modifyInfoApi} from '../../api/user'
import { post } from '../../utils/request'
export default {
data(){
  return {
    nickName:'',
    avatar:'',
    uploadPng:uploadPng
  }
},
created(){
  this.nickName=this.$route.query.nickName
  this.avatar=this.$route.query.avatar
},
methods:{
  async saveHandle(){
    await modifyInfoApi({
      nickName:this.nickName,
      avatar:this.avatar,
})
this.$router.push({name:'my'})

},
selImg(){
  this.$refs.file.click();
},
selendHandle(e){
  console.log(e.target.files[0]);
  const formData=new FormData()
  formData.append('file',e.target.files[0]);
  post('/api/v1/common/file_upload',formData).then((res)=>{
    console.log(res)
     this.avatar = res.data;})
    
},
     onClickLeft() {
     this.$router.go(-1);
     },
},
}
</script>

<style scoped>
.info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.avatar{
   width: 40vw;
  height: 40vw;
  max-height: 300px;
  border-radius: 20%;
}
input{
  margin-top: 2rem;
}
button{
  background: #f67000;
  margin: 2rem auto;
  border: none;
    width: 30vw;
  height: 8vw;
  color: #fff;

}
</style>