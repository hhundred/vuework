<template>
    <div class='addriessList'>
                <van-nav-bar
      :fixed="true"
      :placeholder="true"
      title="收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
        <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
    </div>
</template>

<script>
import { Toast } from 'vant';
// import addressesListApi  from '../../api/address'
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('新增地址');
      this.$router.push("/Address")
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
                 onClickLeft() {
           this.$router.go(-1);
         },
  },
};
</script>
<style scoped>
    
</style>