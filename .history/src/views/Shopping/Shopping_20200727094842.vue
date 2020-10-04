<template>
  <div>
    <div v-for="(item,index) in arr" :key="index" class="box">
      <div class="left">
        <van-checkbox v-model="checked"></van-checkbox>
      </div>
      <div>
        <img :src="item.image_path" alt />
      </div>
      <div>
        <div>{{item.name}}</div>
        <div>
          <div>{{item.present_price}}</div>
          <div>
            <van-stepper v-model="value" min="1" />
          </div>
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
      checked: false,
      value: 1,
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getCard()
      .then((res) => {
        this.arr = res.shopList;
        console.log(this.arr, "购物车数据");
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
.box {
  display: flex;
  width: 100%;
  height: 100%;
  .left
}
</style>