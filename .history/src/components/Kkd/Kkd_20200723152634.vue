<template>
  <div class="one">
    <div class="two">商品分类</div>
    <van-tabs v-model="active" @click="topcli" v-if="arr">
      <div v-for="(item,index) in arr" :key="index">
        <div v-if="index===activeKey">
          <div v-for="(item1,index1) in item.bxMallSubDto " :key="index1">
            <van-tab :title="item1.mallSubName" class="vant">
              <div
                v-for="(item2,index2) in dataList"
                :key="index2"
                class="box1"
                @click="tid(item2,index)"
              >
                <div class="box2">
                  <img :src="item2.image" alt width="70px" />
                </div>
                <div class="box3">
                  <div
                    style="white-space: nowrap;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       width:200px"
                  >{{item2.name}}</div>
                  <div class="box4">
                    <div style="color:red">&yen;{{item2.present_price}}</div>
                    <div style="text-decoration:line-through;color:gray">{{item2.orl_price}}</div>
                  </div>
                </div>
              </div>
              <div style="height:150px;"></div>
            </van-tab>
          </div>
        </div>
      </div>
    </van-tabs>
    <van-sidebar v-model="activeKey" v-if="arr">
      <div v-for="(item,index) in arr " :key="index">
        <van-sidebar-item :title="item.mallCategoryName" @click="leftcli(item,index)" />
      </div>
    </van-sidebar>
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
      activeKey: 0,
      active: 0,
      id: "",
      CIndex: 0,
      dataList: [],
      msg: [],
    };
  },
  methods: {
    //点击左侧导航
    leftcli(item, index) {
      this.CIndex = index;
      let id = this.arr[index].bxMallSubDto[0].mallSubId;
      this.$api
        .classification(id)
        .then((res) => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击头部导航
    topcli(item, index) {
      console.log(item, 1);
      let id = this.arr[this.activeKey].bxMallSubDto[item].mallSubId;
      console.log(this.arr);
      this.$api
        .classification(id)
        .then((res) => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //从首页或者别的页面通过路由点击到达页面
    get() {
      let id = this.arr[this.activeKey].bxMallSubDto[0].mallSubId;
      this.$api
        .classification(id)
        .then((res) => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tid(item, index) {
      console.log(item);
      // this.$router.push({
      //   path: "/Details",
      //   query: {
      //     id: item.goodsId,
      //   },
      // });
    },
  },
  mounted() {
    this.CIndex = this.$route.query.index;
    // console.log(this.CIndex);
    this.arr = JSON.parse(localStorage.getItem("kind"));
    console.log(this.arr);
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
    }
    this.get();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box1 {
  display: flex;
  .box2 {
    border: 1px solid rgba(214, 202, 202, 0.438);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box3 {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .box4 {
      display: flex;
    }
    .box4 > div {
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}
.vant {
  position: absolute;
  width: 75vw;
  height: 100vh;
  right: 0px;
  overflow: scroll;
}
.one {
  height: 90vh;
}
.two {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
</style>
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
              <div class="price">&yen;{{item.price}}</div>
            </div>
            <div class="btn">
              <van-button round type="info" text="加入购物车" size="mini"></van-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>