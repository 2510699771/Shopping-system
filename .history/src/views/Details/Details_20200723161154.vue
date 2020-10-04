<template>
  <div>
      <van-button round type="info" class="btn">圆形按钮</van-button>
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item>
        <img :src="this.arr.image" alt style="width:100%;height:100%" />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="this.arr.image_path" alt style="width:100%;height:100%" />
      </van-swipe-item>
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
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.btn{
    bor
}
</style>