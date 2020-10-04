<template>
  <div class="box2">
    <!-- 搜索框 -->
    <!-- <div $store.state></div> -->
    <div v-if="$store.state.rrr===0">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
          @focus="get"
          @blur="lose"
          style="background-color: rgb(237, 237, 237);"
        />
      </form>
      <div v-for="(item,index) in goods" :key="index">
        <van-cell :title="item.name" />
      </div>
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
      ree:1
    };
  },
  methods: {this.$store.commint();
    lose(){
      this.ree=1
      this.$emit('update',this.ree)
    },
    //获取焦点
    get(){
     this.ree=0
     this.$emit('update',this.ree)
    },
    //搜索
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
    //取消
    onCancel() {
      this.ree=1
      this.$emit('update',this.ree)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box2 {
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>