<template>
  <div class="box">
    <div class="top">
      <div class="top1">1F</div>
      <div>{{arr1.floor1}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {
      floor1:{
          t
      }
  },
  //注册组件
  components: {},
  data() {
    return {
      arr: [],
      arr1: {}
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.arr = res.data.floor1;
        this.arr1 = res.data.floorName;
        // console.log(this.arr);
        // console.log(this.arr1);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  .onelayer {
    display: flex;
    flex-direction: column;
  }
  .twolayer {
    display: flex;
    width: 100%;
  }
}
.threelayer > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
}
.top{
    display: flex;
    margin-top: 10px;
    background-color: white;
    align-items: center;
    height: 30px;
    border: 1xp solid rgb(33, 10, 77);
    color: red;
    justify-content: center;

}
.top1{
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
}
</style>