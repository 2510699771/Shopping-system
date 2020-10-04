<template>
  <div>
    <router-view></router-view>
    <div class="bot">
      
        <!-- <van-grid-item icon="wap-home-o" text="商城" :default-active="$route.path" />
        <van-grid-item icon="apps-o" text="分类" @click="kind" :index="Mall" />
        <van-grid-item icon="shopping-cart" text="购物车" @click="shopping" />
        <van-grid-item icon="contact" text="我的" @click="myself" />-->
        <van-tabbar route>
          <van-tabbar-item replace to="/Mall" icon="wap-home-o">商城</van-tabbar-item>
          <van-tabbar-item replace to="/Kind" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/Shopping" icon="shopping-cart">标签</van-tabbar-item>
          <van-tabbar-item replace to="/Myself" icon="contact">标签</van-tabbar-item>
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
  position: absolute;
  z-index: 5;
  bottom: 0px;
}
</style>