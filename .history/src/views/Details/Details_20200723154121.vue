<template>
  <div>阿萨德</div>
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
      id: "",
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.$route.query.id);
     let id = this.arr[this.activeKey].bxMallSubDto[0].mallSubId;
      this.$api
        .classification(id)
        .then((res) => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>