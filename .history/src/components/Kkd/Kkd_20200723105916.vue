<template>
  <div class="one">
    <van-tabs v-model="active" @click="topcli" v-if="arr">
      <div v-for="(item,index) in arr[CIndex].bxMallSubDto " :key="index">
      <div v-for="(item1,index1) in item.bxMallSubDto " :key="index1">
        <van-tab :title="item.mallSubName" class="vant">
          <div v-for="(item,index) in dataList" :key="index" class="box1">
            <div class="box2">
              <img :src="item.image" alt width="70px" />
            </div>
            <div class="box3">
              <div
                style="white-space: nowrap;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       width:200px"
              >{{item.name}}</div>
              <div class="box4">
                <div style="color:red">&yen;{{item.present_price}}</div>
                <div style="text-decoration:line-through">{{item.orl_price}}</div>
              </div>
            </div>
          </div>
          <div style="height:110px"></div>
        </van-tab>
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
      arr: "",
      activeKey: 0,
      active: 0,
      id: "",
      CIndex: "",
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
      console.log(item, "1");
      console.log(index, "2");
      let id = this.arr[this.CIndex].bxMallSubDto[item].mallSubId;
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
    .box4 {
      display: flex;
    }
    .box4 > div {
      margin-left: 10px;
      margin-top: 10px;
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
</style>