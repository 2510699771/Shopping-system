<template>
  <div>
    <!-- 我的订单路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>我的订单</span>
    </div>
    <div v-for="(item,index) in arr" :key="index">
      <div class="ctop">
        <div>{{item.order_id}}</div>
        <div v-for="(item1,index1) in item.order_list" :key="index1">
          <div>
            <img :src="item1.image_path" alt />
          </div>
          <div>{{item1.name}}</div>
          <div>&#165;{{item1.present_price}}</div>
          <div>X{{item1.count}}</div>
        </div>
        <div>{{}}</div>
        <div></div>
        <div></div>
      </div>
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
  methods: {
    ret() {
      this.$router.push("/myself");
    },
  },
  mounted() {
    this.$api
      .getMyOrder()
      .then((res) => {
        this.arr = res.list;
        console.log(this.arr);
      })
      .catch();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.ret {
  position: absolute;
  z-index: 5;
  left: 5px;
  top: 15px;
}
.top {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(182, 161, 161, 0.26);
  border: 1px solid rgba(194, 178, 178, 0.267);
}
.ctop {
  width: 100%;
  border: 1px solid rebeccapurple;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>