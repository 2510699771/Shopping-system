<template>
  <div>
    <van-grid>
      <div v-for="(item,index) in arr" :key="index">
        <van-grid-item icon="photo-o" text="文字" />
      </div>
    </van-grid>
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
        arr
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.arr = res.data.slides;
        console.log(this.arr);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>