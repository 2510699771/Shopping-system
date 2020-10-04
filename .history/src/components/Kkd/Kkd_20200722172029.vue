<template>
  <div>
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>