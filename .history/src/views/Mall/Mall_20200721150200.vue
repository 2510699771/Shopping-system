<template>
  <div>
    商城
    <Navigation></Navigation>
    <Shuffling></Shuffling>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Bottom/Bottom.vue";
import Navigation from "../../components/Mll/Navigation.vue";
import Shuffling from "../../components/Mll/Shuffling.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Bottom,
    Navigation,
    Shuffling
  },
  data() {
    return {
        arr:{}
    };
  },
  methods: {},
  mounted() {
      this.$api
      .recommend()
      .then(res => {
        this.arr = res;
        console.log(this.arr);
        localStorage.setItem("recommend", JSON.stringify(res));
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>