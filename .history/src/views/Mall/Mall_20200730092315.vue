<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="box">
      <Navigation></Navigation>
      <div v-if="this.ree===1">
        <Shuffling></Shuffling>
        <kid></kid>
        <div class="inside">
          <img :src="this.img.PICTURE_ADDRESS" alt style="width:95%;margin:0px 0px 10px 0px" />
        </div>
        <Recommended></Recommended>
        <Ff :floor="this.floor1" :floorname="this.floorname1"></Ff>
        <Ff :floor="this.floor2" :floorname="this.floorname2"></Ff>
        <Ff :floor="this.floor3" :floorname="this.floorname3"></Ff>
        <Hot :hotGoods="this.hotGoods"></Hot>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
import { Toast } from "vant";
import Navigation from "../../components/Mll/Navigation.vue"; //搜索框
import Shuffling from "../../components/Mll/Shuffling.vue"; //轮播图
import Kid from "../../components/Mll/Kid.vue"; //分类(五个)
import Recommended from "../../components/Mll/Recommended.vue"; //商品推荐
import Ff from "../../components/Mll/Ff.vue"; //1~3F 子组件
import Hot from "../../components/Mll/Hot.vue"; //热销 子组件
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
    Hot,
  },
  data() {
    return {
      img: {},
      floor1: [],
      floor2: [],
      floor3: [],
      floorname1: "",
      floorname2: "",
      floorname3: "",
      hotGoods: [],
      isLoading: false,
      ree:1,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$router.go("0");
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {
    l
    this.$api
      .recommend()
      .then((res) => {
        this.img = res.data.advertesPicture;
        this.floor1 = res.data.floor1;
        this.floor2 = res.data.floor2;
        this.floor3 = res.data.floor3;
        this.floorname1 = res.data.floorName.floor1;
        this.floorname2 = res.data.floorName.floor2;
        this.floorname3 = res.data.floorName.floor3;
        this.hotGoods = res.data.hotGoods;
        localStorage.setItem("kind", JSON.stringify(res.data.category));
        console.log(res.data);
      })
      .catch();
  },
  watch: {},
  computed: {},
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