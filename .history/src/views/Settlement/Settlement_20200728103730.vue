<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>订单结算</span>
    </div>
    <div>
      <van-cell
        :title="title1"
        @click="to"
        :value="tel1"
        :label="address1"
        icon="location-o"
      />
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
    <van-submit-bar :price="this.present_price*this.num*100" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: "Settlement",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      arr: [],
      num: "",
      present_price: "",
      name: "",
      image: "",
      info: [],
      id: [],
      title1:'',
      tel1:'',
      address1:'',

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
    onSubmit() {
      this.$api
        .order({
          address: this.info.address,
          tel: this.info.tel,
          orderId: this.id,
          totalPrice: this.present_price * 100 * (this.num * 100) * 1,
          idDirect: true,
          count: this.num,
        })
        .then((res) => {
          console.log(res);
        })
        .catch();
    },
    to() {
      console.log(this.id);
      this.$router.push({
        path: "/address",
        query: {
          arr: this.arr,
        },
      });
    },
    get() {},
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("id")); //获取id
    this.num = JSON.parse(localStorage.getItem("value"));
    this.present_price = this.arr.present_price;
    this.image = this.arr.image;
    this.name = this.arr.name;
    this.id = this.arr.id;

    // 请求得到默认地址
    this.$api
      .getDefaultAddress()
      .then((res) => {
        this.info = res.defaultAdd;
        this.title1="收货人:" + this.info.name;
        this.tel1="电话:" + this.info.tel;
        this.address1="地址:" + this.info.address;
      })
      .catch();
    if (this.$route.query) {
      setTimeout(() => {
        this.info = this.$route.query.info;
      }, 500);
    }
  },
  watch: {},
  computed: {
    // totalPrice() {
    //   let people = "收货人:" + this.info.name;
    //   console.log()
    //   return people;
    // },
  },
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
</style>