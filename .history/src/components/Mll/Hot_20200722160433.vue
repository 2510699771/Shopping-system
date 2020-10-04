<template>
  <div class="box">
    <van-grid :column-num="3">
      <div v-for="(item,index) in hotGoods" :key="index" class="box1">
        <div>
          <img :src="item.image" alt />
        </div>
        <div>{{item.name}}</div>
        <div>
          <div>{{item.price}}</div>
          <div>{{item.mallPrice}}</div>
        </div>
      </div>
    </van-grid>
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
  methods: {},
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
  width: 48%px;
}
.box {
  width: 500px;
  display: flex;
}
</style>