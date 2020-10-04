<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>城市列表</span>
    </div>
    <van-search v-model="value" placeholder="请输入城市关键词" />
  </div>
</template>

<script>
import city from "../../../city.js";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      value: "",
      city,
      citys: [],
      kind: [],
    };
  },
  methods: {
    ret() {
      this.$router.push("/mall");
    },
  },
  mounted() {
    console.log(this.city.data.cities);
    for (let i in this.city.data.cities) {
      this.kind.push(i);
    }
    this.kind.map((item,index)=>{
        item
    })
    console.log(this.kind);
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
</style>