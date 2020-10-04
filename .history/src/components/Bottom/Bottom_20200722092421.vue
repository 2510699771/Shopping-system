<template>
  <div class="box">
    <div class="bot">
        <van-tabbar route>
          <van-tabbar-item replace to="/Mall" icon="wap-home-o">商城</van-tabbar-item>
          <van-tabbar-item replace to="/Kind" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/Shopping" icon="shopping-cart">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/Myself" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
      
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
    return {};
  },
  methods: {
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bot {
  width: 100%;
  position:fixed;
  z-index: 5;
  bottom: 0px;

}
.box{
  margin-top: px;
}
</style>