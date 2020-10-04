<template>
  <div>
    <div class="top">
      <span>订单结算</span>
    </div>
    <div v-for="(item,index) in arr" :key="index" class="box">
      <div class="left">
        <van-checkbox v-model="checked"></van-checkbox>
      </div>
      <div>
        <img :src="item.image_path" alt width="100px" />
      </div>
      <div class="right">
        <div style="color:red">{{item.name}}</div>
        <div class="conterright">
          <div style="color:red">{{item.present_price}}</div>
          <div style="margin-right:20px">
            <van-stepper v-model="value" min="1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      arr: [],
      checked: false,
      value: 1,
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getCard()
      .then((res) => {
        this.arr = res.shopList;
        console.log(this.arr, "购物车数据");
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
.box {
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-top: 1px solid rgba(212, 208, 208, 0.219);
  border-bottom: 1px solid rgba(212, 208, 208, 0.219);
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .conterright {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
.ret {
  position: absolute;
  z-index: 5;
  left: 5px;
  top: 15px;
  position: flxed;
}

</style>