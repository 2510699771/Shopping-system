<template>
  <div>
    <van-button class="btn" icon="arrow-left" size="small" @click="ret"></van-button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
      <van-swipe-item>
        <img :src="this.arr.image" alt style="width:100%;height:100%;" />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="this.arr.image_path" alt style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
    <van-cell :title="this.arr.name" :label="'¥'+this.arr.present_price" class="rmb" />
    <div class="out">
      <div class="in">
        <div style="color:gray;font-size: 10px;">运费:{{this.arr.__v}}</div>
        <div style="color:gray;font-size: 10px;">剩余:{{this.arr.amount}}</div>
        <div v-if="num===0" style="color:gray;font-size: 10px;">剩余:{{this.arr.amount}}</div>
        <div v-if="num===1" style="color:gray;font-size: 10px;">剩余:{{this.arr.amount}}</div>
        
      </div>
    </div>
    <div v-html="arr.detail"></div>
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
      id: "",
      arr: {},
    };
  },
  methods: {
    ret() {
      this.$router.go("-1");
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.$route.query.id);
    this.$api
      .goods(this.id)
      .then((res) => {
        this.arr = res.goods.goodsOne;
        console.log(this.arr);
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
.my-swipe .van-swipe-item {
  background-color: rgba(178, 34, 34, 0);
  font-size: 20px;
  line-height: 70px;
}
.btn {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  left: 10px;
  top: 10px;
  background: gray;
  color: white;
}
.pic {
  color: red;
  font-size: 15px;
  margin-left: 15px;
}
.rmb {
  font-size: 15px;
  border-top: 1px solid rgba(204, 194, 194, 0.103);
  border-bottom: 1px solid rgba(204, 194, 194, 0.103);
}
.van-cell__label {
  color: red;
  font-size: 15px;
}
.out {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(204, 194, 194, 0.103);
}
.in {
  display: flex;
  width: 90%;
  border: 1px solid red;
  justify-content: space-between;
}
</style>