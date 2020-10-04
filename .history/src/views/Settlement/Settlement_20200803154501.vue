<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>订单结算</span>
    </div>
    <div>
      <div v-if="info === null">
        <div style="width:100%;height:50px;display:flex;" class="no" @click="add">暂无地址点击添加地址</div>
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
    <div>
      <van-card :num="this.num" :price="this.present_price" :title="this.name" :thumb="this.image" />
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
      arr: [], //用于获取商品信息
      num: "", //商品数量
      present_price: "", //商品价格
      name: "", //商品名字
      image: "", //商品图片
      info: [], //地址信息
      id: [], //用于发请求时的id数组
      title1: "", //拼接后收货人
      tel1: "", //拼接后电话
      address1: "", //拼接后地址
      pic: 0, //总的价格
      tel2: "", //发请求时的电话号码
      nuu: 1, //用于地址列表中做来时判断
      address2:"",
    };
  },
  methods: {
    //返回到详情页
    ret() {
      this.$router.push({
        path: "/Details",
        query: {
          id: this.id,
        },
      });
    },
    //订单提交
    onSubmit() {

      this.$api
        .order(this.address2, this.tel2, this.id, this.pic, true, this.num)
        .then((res) => {
          console.log(res);
          Toast(res.msg);
          this.$router.push("/Myself");
        })
        .catch();
    },
    //选择地址
    to() {
      console.log(this.id);
      this.$router.push({
        path: "/address",
        query: {
          num: this.nuu, //送到地址列表中用于判断从哪里来
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
    this.arr = JSON.parse(localStorage.getItem("id")); //获取id
    this.num = JSON.parse(localStorage.getItem("value")); //获取数量
    this.present_price = this.arr.present_price; //价格
    this.pic = this.num * this.present_price * 100; //总的价格
    this.image = this.arr.image; //商品图片
    this.name = this.arr.name; //商品名字
    this.id.push(this.arr.id); //发请求时需要的id数组

    // 请求得到默认地址把默认地址信息给一个新的数组中
    this.$api
      .getDefaultAddress()
      .then((res) => {
        this.info = res.defaultAdd;
        this.tel2 = this.info.tel;
        this.title1 = "收货人:" + res.defaultAdd.name;
        this.tel1 = "电话:" + res.defaultAdd.tel;
        this.address1 = "地址:" + res.defaultAdd.address;
        this.address2 =res.defaultAdd.address;
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