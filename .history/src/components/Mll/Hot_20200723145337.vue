<template>
  <div class="box">
    <div v-for="(item,index) in hotGoods" :key="index" class="box1" @click="tid(item,index)">
      <div>
        <img :src="item.image" alt style="width:170px" />
      </div>
      <div class="name">{{item.name}}</div>
      <div style="display:flex">
        <div>{{item.price}}</div>
        <div
          style="margin-left:10px;
          text-decoration:line-through;
          color:gray;
          font-size:13px;display:flex;
          justify-content: center;
          align-items: center;"
        >{{item.mallPrice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {
    hotGoods: {
      type: Array
    }
  },
  //注册组件
  components: {},
  data() {
    return {};
  },
  methods: {
    tid(item,index){
      this.$router.push({
        path:"/Details",
        query:{
          id:item.
        }
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-direction: column;
  border:1px solid rgba(221, 209, 209, 0.315)
}
.box {
  display: grid; //设置为网格布局
  grid-template-columns: 1fr 1fr; //设置列数  2列
  grid-auto-flow: row dense; //以"行"为填充
  margin-top: 20px;
}
.name {
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>