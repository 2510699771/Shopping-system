<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>地址列表</span>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      chosenAddressId:'1',
      list: [],
      disabledList: [],
    };
  },
  methods: {
    //添加地址
    onAdd() {
      this.$router.push("/Newaddress");
    },
    //编辑地址
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    //返回上一页
    ret() {
      this.$router.go("-1");
    },
  },
  mounted() {
    //拿到所有用户收货地址
    this.$api
      .getAddress()
      .then((res) => {
        console.log(res.address);
        this.list = res.address;
        //给拿到的数据添加
        this.list.map((item,index) => {
          this.$set(item, 'id', String(index + 1))
        })
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.ret {
  position: absolute;
  z-index: 5;
  left: 5px;
  top: 15px;
}
.top {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(182, 161, 161, 0.26);
  border: 1px solid rgba(194, 178, 178, 0.267);
}
</style>