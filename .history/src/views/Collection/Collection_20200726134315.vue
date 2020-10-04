<template>
  <div>
 <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>订单结算</span>
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
    };
  },
  methods: {
      ret(){ this.$router.push("/mall")},
  },
  mounted() {
    this.$api
      .list()
      .then((res) => {
        this.arr = res.data.list;
        console.log(this.arr);
      })
      .catch();
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