<template>
  <div></div>
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
        arr:[],
    };
  },
  methods: {},
  mounted() {
    this.$api
      .list()
      .then((res) => {
          this.arr=res.data
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