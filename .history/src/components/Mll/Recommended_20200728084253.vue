<template>
  <div> 
    
    <div class="rec">
      <div class="sp">商品推荐</div>
    </div>
    <div class="tabsWrapper" ref="tabsWrapper">
      <ul ref="tab" class="tab">
        <li v-for="(item, index) in arr" :key="index" class="li" @click="tid(item,index)">
          <div class="tab-item">
            <div>
              <img :src="item.image" alt style="height:110px" />
            </div>
            <div class="goodsName">{{item.goodsName}}</div>
            <div class="pic">
              <div class="mallPrice">&yen;{{item.mallPrice}}</div>
              <div class="price">&yen;{{item.price|toFixed}}</div>
            </div>
            <div class="btn">
              <van-button round type="info" text="加入购物车" size="mini"></van-button>
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
    onClickIcon() {},
    onClickButton() {},
    tid(item, index) {
     // console.log(item.goodsId);
      this.$router.push({
        path:"/Details",
        query: {
          id:item.goodsId,
        },
      });
    },
  },
  mounted() {
    this.$api
      .recommend()
      .then((res) => {
        this.arr = res.data.recommend;
        // console.log(this.arr);
      })
      .catch();
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