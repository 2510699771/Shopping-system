<template>
  <div>
    <div>
      <van-cell title="收货人:" is-link to="index" value="123456789" icon="location-o" label="收货地址:" />
      <div>
        <span>收货不便时,可选择免费待收货服务</span>
      </div>
      <div>
        <img src="../../assets/caitiao.jpg" alt style="width:100%" />
      </div>
    </div>
    <div>
      <van-card
        :num="2"
        :price="this.arr.id.present_price"
        :title="this.arr.id.name"
        :thumb="this.arr.id.image"
      />
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
    return {
        arr:[],
    };
  },
  methods: {
    onSubmit() {},
  },
  mounted() {
    this.arr = this.$route.query; //获取id
    console.log(this.arr);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>