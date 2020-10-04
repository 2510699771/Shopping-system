<template>
  <div>
    <div>
      <van-cell title="收货人:" is-link to="index" value="123456789" icon="location-o" label="收货地址:" />
    <div><span>收货不便时,可选择免费待收货服务</span></div>
    <div><img src="../" alt=""></div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
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
    return {};
  },
  methods: {
    onSubmit() {},
  },
  mounted() {
    this.id = this.$route.query; //获取id
    console.log(this.$route.query);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>