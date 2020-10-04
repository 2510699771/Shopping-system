<template>
  <div>
    <!-- 我的订单路由 -->
    <div v-for="(item,index)"></div>
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
        this.arr = res.list
        console.log(this.arr);
      })
      .catch();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>