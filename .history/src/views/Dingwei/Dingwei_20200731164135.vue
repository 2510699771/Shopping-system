<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>城市列表</span>
    </div>
    <van-search v-model="value" placeholder="请输入城市关键词" />
    <span style="margin:15px 0 0 15px;">当前城市</span>
    <div class="thiscity">{{thiscity}}</div>
    <span style="margin:15px 0 0 15px;">热门城市</span>
    <van-grid :column-num="3" :gutter="15" style="margin-top:15px">
      <van-grid-item
        v-for="(item,index) in hotcity"
        :key="index"
        :text="item.name"
        class="hotcity"
        @click="hot(item,index)"
      />
    </van-grid>
    <!-- 索引栏 -->
    <van-index-bar :index-list="kind" highlight-color="red">
      <div v-for="(item,index) in kind " :key="index">
        <van-index-anchor :index="item" sticky>
          <div>{{item}}</div>
          <div v-for="(item1,index1) in citys[index]" :key="index1">
            <van-cell :title="item1.name" @click="allcity(item1,index1)" />
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
      value: "", //与输入框绑定
      city, //引入的城市文件
      citys: [], //接收A~Z里面的城市名字
      kind: [], //接收A~Z
      hotcity: [], //接收火热城市
      thiscity: "",
    };
  },
  methods: {
    allcity(item1, index1) {},
    //点击热门城市
    hot(item, index) {
      this.$router.push("/mall")
    },
    //返回
    ret() {
      this.$router.push("/mall");
    },
  },
  mounted() {
    if (this.$route.query) {
      this.thiscity = this.$route.query.city;
      console.log(this.thiscity, "this.city");
    }
    //索引栏的标题与内容
    for (let i in this.city.data.cities) {
      this.kind.push(i);
      this.citys.push(this.city.data.cities[i]);
    }
    this.hotcity = this.city.data.hotCities;
    console.log(this.hotcity);
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
.hotcity {
  height: 30px;
  color: black;
}
.thiscity {
  margin: 15px 0 0 15px;
  width: 105px;
  height: 32px;
  border: 1px solid #ebedf0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2vw;
  color: #646566;
  line-height: 1.5;
  margin-bottom: 15px;
}
</style>