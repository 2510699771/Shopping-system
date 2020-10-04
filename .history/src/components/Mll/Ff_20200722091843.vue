<template>
  <div class="box">
    <div v-for="(item,index) in arr" :key="index">
      <div>
        <div>{{index+1}}F</div>
        <div>{{this.arr1.floor1}}</div>
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
      arr1:[],
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
}
</style>