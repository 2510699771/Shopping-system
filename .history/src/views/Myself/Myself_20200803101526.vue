<template>
  <div class="box">
    <div class="vip">
      <h3>会员中心</h3>
    </div>
    <div class="top">
      <div class="avatar">
        <img :src="this.user.avatar" alt width="60px" class="aa" />
      </div>
      <div style="margin-top:10px" v-if=localStorage.getItem('user')">
        <h4>欢迎您：{{this.nickname}}</h4>
      </div>
      <div style="margin-top:10px" v-if="this.nickname===''">
        <h4>欢迎您：IP</h4>
      </div>
      <div style="margin-top:10px" @click="exit">
        <h5>退出登录</h5>
      </div>
    </div>
    <van-icon name="setting" class="setup" @click="set" />
    <div class="mid">
      <van-grid class="mid_c">
        <van-grid-item icon="balance-pay" text="代付款" />
        <van-grid-item icon="free-postage" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="thumb-circle-o" text="评价" is-link @click="evaluation" />
        <van-grid-item icon="like-o" text="已完成" />
      </van-grid>
    </div>
    <div class="bottom">
      <van-cell is-link icon="records" @click="allorder">全部订单</van-cell>
      <van-cell is-link icon="star-o" @click="collection" style="margin-top:20px">收藏商品</van-cell>
      <van-cell is-link icon="location-o" @click="address">地址管理</van-cell>
      <van-cell is-link icon="eye-o" @click="Recent_browse">最近浏览</van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      user: [], //用户所有信息
      nickname: "", //用户名
      show: false,
    };
  },
  methods: {
    //点击评价跳转
    evaluation() {
      this.$utils.checkLogin(this.evaluationn);
    },
    evaluationn() {
      this.$router.push("/Evaluation");
    },
    //点击最近浏览跳转
    Recent_browse() {
      this.$utils.checkLogin(this.Recent_browse);
    },
    Recent_browse1() {
      this.$router.push("/Recentbrowse");
    },
    //点击全部订单跳转
    allorder() {
      this.$utils.checkLogin(this.allorder1);
    },
    allorder1() {
      this.$router.push("/MyOrder");
    },
    //点击个人信息跳转
    set() {
      this.$utils.checkLogin(this.set1);
    },
    set1() {
      this.$router.push("/Setup");
    },
    //点击地址管理跳转
    address() {
      this.$utils.checkLogin(this.address1);
    },
    address1() {
      this.$router.push("/addres");
    },
    //点击退出登录跳转
    exit() {
      localStorage.clear();
      this.$utils.checkLogin(this.exit1);
    },
    exit1() {
      localStorage.clear();
      this.$router.push("/Login");
    },
    //点击收藏商品跳转
    collection() {
      this.$router.push("/Collection");
    },
    collection1() {
      this.$router.push("/Collection");
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.nickname = this.user.nickname;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top {
    width: 100vw;
    height: 200px;
    background-color: floralwhite;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: 1px solid rgba(34, 56, 180, 0.678);
      border-radius: 50%;
    }
  }
  .mid {
    width: 100%;
    .mid_c {
      display: flex;
      flex-wrap: nowrap;
    }
  }
  .bottom {
    width: 100%;
  }
  .vip {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.setup {
  position: absolute;
  z-index: 5;
  right: 10px;
  top: 40px;
}
.aa {
  border-radius: 50%;
}
</style>