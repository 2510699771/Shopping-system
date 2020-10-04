<template>
  <div class="box">
    <div class="top">
      <div class="top1">1F</div>
      <div>{{arr1.floor1}}</div>
      div
      <div v-for="(item,index) in floor1" :key="index">
        <img :src="item.image" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {
    floor1: {
      type: Array
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
        console.log(this.arr);
        // console.log(this.arr1);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>