<template>
  <div>
    <!-- 评价路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>评价中心</span>
    </div>
    <div class="ctop">
      <div>
        <img :src="this.arr.image_path" width="120px" alt />
      </div>
      <div class="score">
        <div>商品评分</div>
        <div>
          <van-rate v-model="value" />
        </div>
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
      value: 3,
    };
  },
  methods: {
    //返回
    ret() {
      this.$router.push("/Evaluation");
    },
  },
  mounted() {
    this.arr = this.$route.query.Evacenter;
    console.log(this.$route.query.Evacenter);
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
  display: flex;
}
.score {
  display: flex;
  flex-direction: column;
}
</style>