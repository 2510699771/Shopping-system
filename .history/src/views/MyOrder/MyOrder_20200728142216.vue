<template>
  <div>
    <!-- 我的订单路由 -->
    div
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
  mounted() {
    this.$api
      .getMyOrder()
      .then((res) => {
        console.log(res);
      })
      .catch();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>