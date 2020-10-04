<template>
  <div>
    <div class="rec">
      <div class="sp">商品推荐</div>
    </div>
    <div class="tabsWrapper" ref="tabsWrapper">
      <ul ref="tab" class="tab">
        <li v-for="(item, index) in arr" :key="index" class="li">
          <div class="tab-item">
            <div @click="tid(item,index)">
              <div>
                <img :src="item.image" alt style="height:110px" />
              </div>
              <div class="goodsName">{{item.goodsName}}</div>
              <div class="pic">
                <div class="mallPrice">&yen;{{item.mallPrice|toFixed}}</div>
                <div class="price">&yen;{{item.price|toFixed}}</div>
              </div>
            </div>
            <div class="btn">
              <van-button round type="info" text="加入购物车" size="mini" @click="add(item,index)"></van-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
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
    //点击某个商品的信息,跳转路由
    tid(item, index) {
      this.$router.push({
        path: "/Details",
        query: {
          id: item.goodsId,
        },
      });
    },
    //加入购物车按钮
    add(item, index) {
      // console.log(this.yy);
      let a=this.$utils.checkLogin(this.yy);
      console.log(a);
    },
    yy(item) {
      console.log()
      this.$api
        .addShop({
          id: item.goodsId,
        })
        .then((res) => {})
        .catch();
    },
  },
  mounted() {
    //拿到商品推荐的数据
    this.$api
      .recommend()
      .then((res) => {
        this.arr = res.data.recommend;
      })
      .catch();
    //平滑
    new BScroll(this.$refs.tabsWrapper, { click: true, scrollX: true });
  },
  watch: {},
  computed: {},
  filters: {
    //过滤器
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
.tabsWrapper {
  overflow: hidden;
  display: flex;
  height: 200px;
  background: white;
}
.tab {
  display: flex;
}
.goodsName {
  width: 115px;
  color: gray;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
}
.mallPrice {
  font-size: 15px;
}
.price {
  font-size: 12px;
  margin-left: 8px;
  color: gray;
  text-decoration: line-through;
}
.pic {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
}
.rec {
  border: 1px solid rgba(223, 222, 222, 0.253);
  font-size: 20px;
  margin-top: 20px;
  background-color: white;
}
.li {
  border: 1px solid rgba(223, 222, 222, 0.253);
}
.sp {
  margin-left: 10px;
  height: 40px;
  display: flex;
  align-items: center;
}
.btn {
  display: flex;
  width: 90%;
  justify-content: center;
  margin-top: 5px;
}
</style>