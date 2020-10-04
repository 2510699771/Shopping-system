<template>
  <div>
    <van-sidebar v-model="activeKey">
      <div v-for="(item,index) in arr " :key="index">
        <van-sidebar-item :title="item.mallCategoryName" @click="leftcli(item,index)" />
      </div>
    </van-sidebar>
    <van-tabs v-model="active" @click="topcli">
      <div v-for="(item,index) in arr[CIndex].bxMallSubDto " :key="index">
        <van-tab :title="item.mallSubName">
          <div v-for="(item,index) in dataList" :key="index">
            <div>
              <img src="item." alt="">
            </div>
          </div>
        </van-tab>
      </div>
    </van-tabs>
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
      arr1: [],
      id: "",
      CIndex: "",
      dataList: [],
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
</style>