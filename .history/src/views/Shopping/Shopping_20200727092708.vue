<template>
  <div>
      购物车
  </div>
</template>

<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$api
      .getCard()
      .then((res) => {
        console.log(res, "购物车数据");
        this.num1 = res.shopList.length;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>