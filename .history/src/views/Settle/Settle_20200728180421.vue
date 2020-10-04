<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>订单结算</span>
    </div>
    <div>
      <div v-if="info === null">
        <div style="width:100%;height:50px;display:flex" class="no" @click="add">暂无地址点击添加地址</div>
      </div>
      <div v-if="info !=null">
        <van-cell :title="title1" @click="to" :value="tel1" :label="address1" icon="location-o" />
      </div>

      <div class="get">
        <span>收货不便时,可选择免费待收货服务</span>
      </div>
      <div>
        <img src="../../assets/caitiao.jpg" alt style="width:100%" />
      </div>
    </div>
    <div v-for="(item,index) in trueinfo" :key="index">
      <van-card
        :num="item.count"
        :price="item.mallPrice"
        :title="item.name"
        :thumb="item.image_path"
      />
    </div>
    <van-submit-bar :price="this.pic" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Settlement",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      arr: [],
      info: "", //地址内容
      id: [], //所有的商品id（数组）
      title1: "", //拼接后新的标题
      tel1: "", //拼接后新的电话
      address1: "", //拼接后新的地址
      pic: 0, //合计中的价格
      trueinfo: [], //所有商品信息内容
      num: 0, //总的数量
      nuu: 0,
    };
  },
  methods: {
    //返回到详情页
    ret() {
      this.$router.push("/Shopping");
    },
    //订单提交
    onSubmit() {
      this.$api
        .order(this.address1, this.tel2, this.id, this.pic, false, this.num)
        .then((res) => {
          console.log(res);
          Toast(res.msg);
          this.$router.push("/Myself");
        })
        .catch();
    },
    to() {
      console.log(this.id);
      this.$router.push({
        path: "/address",
        query: {
          num: this.nuu,
        },
      });
    },
    get() {},
    add() {
      this.$router.push({
        path: "/address",
        query: {
          num: this.nuu,
        },
      });
    },
  },
  mounted() {
    this.trueinfo = JSON.parse(localStorage.getItem("trueinfo"));
    this.trueinfo.map((item) => {
      this.pic += item.count * item.mallPrice * 100;
      this.id.push(item.cid);
    });
    this.num = this.trueinfo[0].count;
    console.log(this.num, "第一个商品数量");

    // 请求得到默认地址
    this.$api
      .getDefaultAddress()
      .then((res) => {
        console.log()
        this.info = res.defaultAdd;
        console.log(this.info, "默认地址");
        this.title1 = "收货人:" + res.defaultAdd.name;
        this.tel1 = "电话:" + res.defaultAdd.tel;
        this.address1 = "地址:" + res.defaultAdd.address;
      })
      .catch();

    
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
.get {
  color: goldenrod;
  font-size: 10px;
  margin: 10px 0 0 30px;
}
.van-cell__label {
  width: 180px;
}
.van-cell__value {
  height: 50px;
}
.no {
  justify-content: center;
  align-items: center;
  color: aqua;
  font-size: 15px;
}
</style>