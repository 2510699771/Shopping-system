<template>
  <div>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />
    <van-tabs v-model="activeName">
      <van-tab v-for="(item,index) in kind " title="新鲜水果" name="a">内容 1</van-tab>
     
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
      kind: []
    };
  },
  methods: {},
  mounted() {
    this.kind = JSON.parse(localStorage.getItem(kind));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>