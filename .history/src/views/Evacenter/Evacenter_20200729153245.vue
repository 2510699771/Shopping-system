<template>
  <div>
    <!-- 评价路由 -->
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
   
    this.arr=this.$route.query.Evacenter； console.log(this.$route.query.Evacenter);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>