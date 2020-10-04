<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img :src="this.arr.image" alt=""></van-swipe-item>
      <van-swipe-item><img :src="this.arr.image" alt=""></van-swipe-item>
    </van-swipe>
    <div v-html="arr.detail"></div>
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
      id: "",
      arr: {},
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.$route.query.id);
    this.$api
      .goods(this.id)
      .then((res) => {
        this.arr = res.goods.goodsOne;
        console.log(this.arr);
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>