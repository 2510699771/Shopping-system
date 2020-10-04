<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret"/>
      <span>订单结算</span>
    </div>
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
      <van-card :num="this.num" :price="this.present_price" :title="this.name" :thumb="this.image" />
    </div>
    <van-submit-bar :price="this.present_price*this.num*100" button-text="提交订单" @submit="onSubmit" />
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
      num: "",
      present_price: "",
      name: "",
      image: "",
    };
  },
  methods: {
    ret() {
      this.$router.go("-1");
    },
    onSubmit() {},
  },
  mounted() {
    this.arr = this.$route.query; //获取id
    this.num = this.$route.query.value;
    this.present_price = this.$route.query.id.present_price;
    this.image = this.$route.query.id.image;
    this.name = this.$route.query.id.name;
    console.log(this.arr);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.ret{
    position: absolute;
    z-index: 5;
    left: 5px;
    top: 15px;
}
.top{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
background-color: rgba(182, 161, 161, 0.26);
}
</style>