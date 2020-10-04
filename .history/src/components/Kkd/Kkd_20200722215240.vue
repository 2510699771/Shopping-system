<template>
  <div>
    <van-sidebar v-model="activeKey">
      <div v-for="(item,index) in arr " :key="index">
        <van-sidebar-item :title="item.mallCategoryName" @click="left(item,index)"/>
      </div>
    </van-sidebar>

    <van-tabs v-model="active">
      <div v-for="(item,index) in arr.bxMallSubDto " :key="index">
        <van-tab :title="item.mallSubName">
                                              <!--内容-->
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
      arr1:[],
      id:"",
      CIndex: "",
    };
  },
  methods: {
    left(item,index){

    }
  },
  mounted() {
    this.CIndex=this.$route.query.index
    console.
    this.arr = JSON.parse(localStorage.getItem("kind"));
    console.log(this.arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>