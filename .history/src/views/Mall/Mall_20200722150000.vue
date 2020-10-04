<template>
  <div class="box">
    <Navigation></Navigation>
    <Shuffling></Shuffling>
    <kid></kid>
    <div class="inside">
      <img :src="this.img.PICTURE_ADDRESS" alt style="width:95%;margin:0px 0px 10px 0px" />
    </div>
    <Recommended></Recommended>
    <Ff :floor="this.floor1" :floorName="this.floorName"></Ff>
    <Ff :floor="this.floor2" :floorName="this.floorName"></Ff>
    <Ff :floor="this.floor3"  :floorName="this.floorName"></Ff>
  </div>
</template>

<script>
import Navigation from "../../components/Mll/Navigation.vue";
import Shuffling from "../../components/Mll/Shuffling.vue";
import Kid from "../../components/Mll/Kid.vue";
import Recommended from "../../components/Mll/Recommended.vue";
import Ff from "../../components/Mll/Ff.vue";
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
    Ff,
  },
  data() {
    return {
      img: {},
      floor1: [],
      floor2: [],
      floor3: [],
      floorname:{},
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.img = res.data.advertesPicture;
        this.floor1 = res.data.floor1;
        this.floor2 = res.data.floor2;
        this.floor3 = res.data.floor3;
        this.floorname = res.data.floorName;

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
.inside {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>