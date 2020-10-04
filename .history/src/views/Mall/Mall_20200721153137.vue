<template>
  <div class="box">
    商城
    <Navigation></Navigation>
    <Shuffling></Shuffling>
    <kid></kid>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Bottom/Bottom.vue";
import Navigation from "../../components/Mll/Navigation.vue";
import Shuffling from "../../components/Mll/Shuffling.vue";
import Kid from "../../components/Mll/Kid.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Bottom,
    Navigation,
    Shuffling,
    Kid,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box{
    back
}
</style>