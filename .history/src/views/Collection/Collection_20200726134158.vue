<template>
  <div>
 <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>订单结算</span>
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
      arr: [],
    };
  },
  methods: {},
  mounted() {
    this.$api
      .list()
      .then((res) => {
        this.arr = res.data.list;
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