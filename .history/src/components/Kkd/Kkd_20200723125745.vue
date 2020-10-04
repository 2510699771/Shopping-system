<template>
  <div class="one">
    <div class="two">商品分类</div>
    <van-tabs v-model="active" @click="topcli" v-if="arr">
      <div v-for="(item,index) in arr" :key="index">
        <div v-if="index===activeKey">
          <div v-for="(item1,index1) in item.bxMallSubDto " :key="index1">
            <van-tab :title="item1.mallSubName" class="vant">
              <div v-for="(item2,index2) in dataList" :key="index2" class="box1">
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
              <div style="height:110px"></div>
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
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      activeName: "a",
      activeId: 1,
      activeIndex: 0,
      arr: [],
      activeKey: 0,
      active: 0,
      id: "",
      CIndex: 0,
      dataList: [],
      bxMallSubDto: [],
    };
  },
  methods: {
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
    topcli(item, index) {
      console.log(item, 1);
      // console.log(index, "2");
      //let id = this.arr[this.CIndex].bxMallSubDto[item].mallSubId;
      let id = this.arr.map((item1, index1) => {
        item1.map((item2, index2) => {
          item.mallSubId;
        });
      });
      console.log(id, "1");
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