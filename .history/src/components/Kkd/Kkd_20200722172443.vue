<template>
  <div>
    <van-tabs v-model="activeName">
  <van-tab title="标签 1" name="a">内容 1</van-tab>
  <van-tab title="标签 2" name="b">内容 2</van-tab>
  <van-tab title="标签 3" name="c">内容 3</van-tab>
</van-tabs>
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </template>
    </van-tree-select>
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
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>