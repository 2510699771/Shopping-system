<template>
  <div>
    <!-- 评价路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>评价中心</span>
    </div>
    <div class="ctop">
      <img src="../../assets/evaluate.jpg" width="100%" alt />
    </div>
    <van-tabs @click="onClick">
      <van-tab title="待评价">
        <div v-for="(item,index) in this.arr" :key="index">
            <div></div>
        </div>
      </van-tab>
      <van-tab title="已评价">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      arr: [], //待评价商品信息
    };
  },
  methods: {
    //返回
    ret() {
      this.$router.push("/myself");
    },
    onClick(name, title) {
      Toast(title);
    },
  },
  mounted() {
    this.$api
      .tobeEvaluated()
      .then((res) => {
        this.arr = res.data.list;
        console.log(this.arr);
        console.log(res);
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
}
</style>