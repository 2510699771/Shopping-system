<template>
  <div>
    <van-tabs v-model="activeName">
      <div v-for="(item,index) in arr " :key="index">
        <van-tab :title="item.mallCategoryName" :name="item.mallCategoryId">内容 1</van-tab>
      </div>
    </van-tabs>

    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
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
      activeName: "a",
      activeId: 1,
      activeIndex: 0,
      activeId: 1,
      activeIndex: 0,
      arr: [],
      activeKey: 0,
      active:0,
    };
  },
  methods: {},
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("kind"));
    console.log(this.arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>