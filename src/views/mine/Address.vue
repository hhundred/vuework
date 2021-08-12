<template>
    <div class='address'>
        <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="添加收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>

    
</template>

<script>
import { Toast } from 'vant';
import areaList from '../../utils/area'
import addressesApi from '../../api/address'
export default {
    
    components: {},
    data() {
        return { 
          // receiver:'',
          // mobile:'',
          // region:'',
          // address:'',
          // idDefault:'',
          areaList,
          searchResult: [],  

        };
    },
    computed: {},
    watch: {},
    
    methods: {
       async onSave(){
    await addressesApi({
      nickName:this.nickName,
      avatar:this.avatar,
     })
this.$router.push({name:'mine'})
       },
    
//    async onSave() {
//  window.console.log('确认')
//       const result = await addressesApi()
//             // console.log(result);
//             if(result.data.code=="success"){
//                   Toast('save')
//                 .then(() => {
//                     this.$router.push("/Addresslist") 
//                 })
//                 .catch(() => {
                    
//                 });
//             }

      // Toast('save');
      // this.$router.push("/Addresslist")
    // },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
          onClickLeft() {
          this.$router.go(-1);
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