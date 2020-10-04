<template>
  <div>
    <!-- 评价路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>评价中心</span>
    </div>
    <div class="ctop">
      <img src="../../assets/evaluate.jpg" width="100%" alt />
    </div>
    <van-tabs @click="onClick">
      <van-tab title="待评价" name="0">
        <div v-for="(item,index) in this.arr" :key="index">
          <van-card :title="item.name" :thumb="item.image_path" style="margin-top:10px">
            <template #footer>
              <van-button round size="small" @click="eva(item,index)">
                <div style="display:flex">
                  <van-icon name="chat" color="red" />
                  <div style="margin-left:10px;color:red">晒单评论</div>
                </div>
              </van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
      <van-tab title="已评价" name="1">
        <div v-for="(item,index) in this.arr1" :key="index">
          <van-card
            :title="item.goods[0].name"
            :thumb="item.goods[0].image_path"
            style="margin-top:10px"
          >
            <template #footer>
              <van-button round size="small" @click="look(item,index)">
                <div style="display:flex">
                  <div style="margin-left:10px;color:red">查看评价</div>
                </div>
              </van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      arr: [], //待评价商品信息
      arr1: [], //已评价商品信息
      
    };
  },
  methods: {
    this.$route.query
    eva(item, index) {
      console.log(item, "item");
      this.$router.push({
        path: "Evacenter",
        query: {
          Evacenter: item,
          num: 0,
        },
      });
    },
    look(item, index) {
      console.log(item.goods[0], "item");
      this.$router.push({
        path: "Evacenter",
        query: {
          Evacenter: item.goods[0],
          all: item,
          num: 1,
        },
      });
    },
    //返回
    ret() {
      this.$router.push("/myself");
    },
    onClick(name, title) {
      Toast(title);
    },
  },
  mounted() {
    this.$api
      .tobeEvaluated()
      .then((res) => {
        this.arr = res.data.list;
        console.log(res, "待评价");
      })
      .catch((err) => {
        console.log(err);
      });
    this.$api
      .alreadyEvaluated()
      .then((res) => {
        this.arr1 = res.data.list;
        console.log(res, "已评价");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.ret {
  position: absolute;
  z-index: 5;
  left: 5px;
  top: 15px;
}
.top {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(182, 161, 161, 0.26);
  border: 1px solid rgba(194, 178, 178, 0.267);
}
.ctop {
  width: 100%;
}
</style>