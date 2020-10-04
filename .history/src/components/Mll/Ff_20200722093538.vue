<template>
  <div class="box">
    <div>1F</div>
    <div>{{this.arr1.floor1}}</div>
    <div v-for="(item,index) in arr" :key="index">
      <div class="onelayer">
        <div class="twolayer">
          <div class="threelayer">1</div>
          <div class="threelayer">
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div class="twolayer">
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
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
        console.log(this.arr);
        console.log(this.arr1);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  .onelayer{
      display: flex;
      width: 100%;
      flex-direction: column;
  }
}
</style>