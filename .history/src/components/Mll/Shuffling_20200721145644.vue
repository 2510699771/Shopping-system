<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <div v-for="(item,index) in img" :key="index" style="width:95%">
        <van-swipe-item>
          <img :src="item.image" alt style="width:100%;height:100%" />
        </van-swipe-item>
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
  text-align: center;
  width: ;
  background-color: #39a9ed;
}
</style>