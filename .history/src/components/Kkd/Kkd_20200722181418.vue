<template>
  <div>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />
    <van-tabs v-model="activeName">
      <van-tab title="新鲜水果" name="a">内容 1</van-tab>
      <van-tab title="热带水果" name="b">内容 2</van-tab>
      <van-tab title="时令水果" name="c">内容 3</van-tab>
      <van-tab title="标签" name="c">内容 3</van-tab>
      <van-tab title="标签 " name="c">内容 3</van-tab>
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
      items,
      activeId: 1,
      activeIndex: 0,
      kind:[]
      
    };
  },
  methods: {},
  mounted() {

  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>