<template>
  <div>
    <div v-for="(item,index)in hotGoods" :key="index">
      <div>
        <img :src="item.image" alt style="width:100%;height:100%;" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {
    hotGoods: {
      type: Array
    }
  },
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