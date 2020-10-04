<template>
  <div>
    <!-- 我的订单路由 -->
    <div v-for></div>
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
      arr: [],
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getMyOrder()
      .then((res) => {
        this.arr = res.listconsole.log(res);
      })
      .catch();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>