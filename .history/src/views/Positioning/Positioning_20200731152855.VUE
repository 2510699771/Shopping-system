<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>城市列表</span>
    </div>
    <van-search v-model="value" placeholder="请输入城市关键词" />
    <span>当前城市</span>
    <div>XX</div>
    <span>热门城市</span>
    <!-- 索引栏 -->
    <van-index-bar :index-list="kind" highlight-color="red">
      <div v-for="(item,index) in kind " :key="index">
        <van-index-anchor :index="item" sticky>
          <div>{{item}}</div>
          <div v-for="(item1,index1) in citys[index]" :key="index1">
            <van-cell :title="item1.name" />
          </div>
        </van-index-anchor>
      </div>
    </van-index-bar>
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
    console.log(this.city.data);
    
    for (let i in this.city.data.cities) {
      this.kind.push(i);
      this.citys.push(this.city.data.cities[i]);
    }

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