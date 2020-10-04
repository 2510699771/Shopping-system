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
        <van-cell :title="item.name" />
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
      goods: [],
      ree:0
    };
  },
  methods: {
    get(){
     this.ree=1
      
    },
    onSearch() {
      this.$api
        .search({
          value: this.value
        })
        .then(res => {
          this.goods = res.data.list;
          console.log(this.goods);
        })
        .catch();
    },
    onCancel() {
      this.ree=0
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