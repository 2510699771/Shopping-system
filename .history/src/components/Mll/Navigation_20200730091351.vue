<template>
  <div class="box2">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="get"
        style="background-color: rgb(237, 237, 237);"
      />
    </form>
    <div v-for="(item,index) in goods" :key="index">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>{{

<script}}>
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      value: "",
      goods: []
    };
  },
  methods: {
    get(){
      this.$router.push
    },
    onSearch(val) {
      this.$api
        .search({
          value: this.val
        })
        .then(res => {
          this.goods = res.data.list;
          console.log(this.goods);
        })
        .catch();
    },
    onCancel() {
      Toast("取消");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box2{
  width: 100vw;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 5;
}
</style>