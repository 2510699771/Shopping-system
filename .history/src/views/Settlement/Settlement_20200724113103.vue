<template>
  <div>
    <div>
        <van-cell title="路由跳转" is-link to="index" ><van-cell>
      <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
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
  methods: {
    onSubmit() {},
  },
  mounted() {
    this.id = this.$route.query; //获取id
    console.log(this.$route.query);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>