<template>
  <div class="box">
    商城
    <Navigation></Navigation>
    <Shuffling></Shuffling>
    <kid></kid>
    <Bottom></Bottom>
    <div class="inside">
      <img :src="this.img.PICTURE_ADDRESS" alt style="width:95%" />
    </div>
    <></>
  </div>
</template>

<script>
import Bottom from "../../components/Bottom/Bottom.vue";
import Navigation from "../../components/Mll/Navigation.vue";
import Shuffling from "../../components/Mll/Shuffling.vue";
import Kid from "../../components/Mll/Kid.vue";
import recommended from "../../components/recommended/recommended.vue";
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
    recommended,
  },
  data() {
    return {
      img: {}
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.img = res.data.advertesPicture;
        console.log(res);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  background-color: rgb(237, 237, 237);
}
.inside{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
</style>