<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <div v-for="(item,index) in img" :key="index">
        <van-swipe-item><img src="http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg" alt=""></van-swipe-item>
      </div>

      
    </van-swipe>
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
      img: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.img = res.data.slides;
        console.log(this.img);
      })
      .catch();
  },
  watch: {},
  computed: {}
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