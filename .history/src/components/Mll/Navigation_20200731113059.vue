<template>
  <div class="box2">
    <!-- 搜索框 -->
    <!-- <div $store.state></div> -->
    <div>
      <div class="box3">
        {{}}
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @cancel="onCancel"
          @focus="get"
          style="background-color: rgb(237, 237, 237);"
        />
      </div>
      <div
        v-if="goods.length===0 && $store.state.rrr===0"
        class="allhis"
        style="margin:20px 0 0 20px;display:flex"
      >
        <div>
          <van-button @click="del" size="mini">删除历史</van-button>
        </div>
        <div style="margin-left:10px">
          <span class="his">搜索历史</span>
        </div>

        <div v-for="(item,index) in history " :key="index" class="cit">
          <span style="margin-left:10px">{{item}}</span>
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
    del() {
      this.$store.commit("setrrr", 0);
      localStorage.removeItem("Search_history");
      this.history = [];
    },
    //点击商品
    shop(item, index) {
      let a = localStorage.getItem("Search_history");
      if (a === null) {
        this.history = [];
        this.history.unshift(this.value);
        localStorage.setItem("Search_history", JSON.stringify(this.history));
      }
      if (a != null) {
        a = JSON.parse(a);
        if (a.length > 9) {
          a.splice(10);
        }
        this.history = [];
        a.map((item, index) => {
          if (item === this.value) {
            a.splice(index, 1);
          }
        });

        this.history = a;
        console.log(this.history, "this.history");
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
  mounted() {
    let _this = this;
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        console.log(data);
        _this.city = data.addressComponent.city;
      }

      function onError(data) {
        console.log(data);
        // 定位出错
      }
    });
  },
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
.his {
  color: gray;
  font-size: 10px;
}
.allhis {
  display: flex;
  align-items: center;
}
.cit {
  display: flex;
  align-items: center;
}
</style>