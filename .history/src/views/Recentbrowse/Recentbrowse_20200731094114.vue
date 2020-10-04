<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>地址列表</span>
    </div>
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
      arr: [], //用于接收全部最近浏览的信息
    };
  },
  methods: {
      ret() {
      if (this.num === 0) {
        this.$router.push("/Settle");
      }
      if (this.num === 1) {
        this.$router.push("/Settlement");
    },
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("Recently_look"));
    console.log(this.arr, "arr");
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style