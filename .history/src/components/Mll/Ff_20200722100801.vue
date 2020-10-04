<template>
  <div class="box">
    <div>1F</div>
    <div>{{this.arr1.floor1}}</div>
    <div class="onelayer">
      <div class="twolayer">
        <div class="threelayer">
          <img :src="this.arr[0].image" alt style="width:100%" />
        </div>
        <div class="threelayer">
          <div>
            <img :src="this.arr[1].image" alt  style="width:98"/>
          </div>
          <div>
            <img :src="this.arr[2].image" alt  style=""/>
          </div>
        </div>
      </div>
      <div class="twolayer">
        <div>
          <img :src="this.arr[3].image" alt  style="width:100%"/>
        </div>
        <div>
          <img :src="this.arr[4].image" alt  style="width:100%"/>
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
  .onelayer {
    display: flex;
    flex-direction: column;
  }
  .twolayer {
    display: flex;
  }
}
</style>