<template>
  <div class="box">
    <Navigation></Navigation>
    <Shuffling></Shuffling>
    <kid></kid>
    <div class="inside">
      <img :src="this.img.PICTURE_ADDRESS" alt style="width:95%；" />
    </div>
    <Recommended></Recommended>
  </div>
</template>

<script>
import Navigation from "../../components/Mll/Navigation.vue";
import Shuffling from "../../components/Mll/Shuffling.vue";
import Kid from "../../components/Mll/Kid.vue";
import Recommended from "../../components/Mll/Recommended.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Navigation,
    Shuffling,
    Kid,
    Recommended,
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