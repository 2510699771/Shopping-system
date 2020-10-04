<template>
  <div class="box2">
    <!-- 搜索框 -->
    <!-- <div $store.state></div> -->
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @cancel="onCancel"
          @focus="get"
          @blur="lose"
          style="background-color: rgb(237, 237, 237);"
        />
      </form>
      <div style="margin:20px 0 0 20px">
        <div v-for="(item,index) in history " :key="index">
          <span>{{item}}</span>
        </div>
      </div>
      <div v-if="$store.state.rrr===0" class="app">
        <div v-for="(item,index) in goods" :key="index">
          <div class="aaa">
            <div v-html="item.name" @click="shop(item,index)"></div>
          </div>
        </div>
      </div>
    </div>
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
      value: "",
      value1: "",
      good: [],
      goods: [],
      ree: 1,
      history: [], //搜索历史
    };
  },
  methods: {
    //点击商品

    shop(item, index) {
      let a = localStorage.getItem("Search_history");
      if (a === null) {
        this.history = [];
        this.history.push(this.value);
        localStorage.setItem("Search_history", JSON.stringify(this.history));
      }
      if (a != null) {
        a = JSON.parse(a);
        this.history = [];
        a.map(item=>{
          if(stringifyitem)
        })
        this.history = a;
        this.history.push(this.value);
        localStorage.setItem("Search_history", JSON.stringify(this.history));
      }

      console.log(item, "item");
      this.$store.commit("setrrr", 1);
      this.$router.push({
        path: "/Details",
        query: {
          id: item.id,
        },
      });
    },
    //失去焦点
    lose() {
      if (this.value === "") {
        this.$store.commit("setrrr", 1);
      }
    },
    //获取焦点
    get() {
      //commit传入两个个参数(第一个为commit内方法的名字, 第二个为改变之后的值)
      this.$store.commit("setrrr", 0);
      this.history = JSON.parse(localStorage.getItem("Search_history"));
    },
    //取消
    onCancel() {
      this.$store.commit("setrrr", 1);
      this.goods = [];
    },
  },
  mounted() {},
  watch: {
    value(val) {
      if (val === "") {
        this.goods = [];
      } else {
        this.goods = [];
        this.$api
          .search({
            value: val,
          })
          .then((res) => {
            this.goods = res.data.list;
            console.log(this.goods);
            res.data.list.map((item, index) => {
              let a = item.name.indexOf(val);
              let b = item.name.slice(0, a);
              let c = item.name.slice(a + val.length);
              item.name = b + `<span style="color:red">${val}</span>` + c;
            });
          })
          .catch();
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang='scss'>
.box2 {
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 5;
}
.app {
  overflow: scroll;
  height: 610px;
  margin-left: 10px;
}
.aaa {
  height: 40px;
  display: flex;
  align-items: center;
}
</style>