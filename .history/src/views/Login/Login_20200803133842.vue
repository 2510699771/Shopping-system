<template>
  <div class="box">
    <div class="ret">
      <van-icon name="arrow-left" />
    </div>
    <van-form @submit="onSubmit" class="content">
      <div class="title">登录/注册</div>
      <van-field
        v-model="username"
        name="用户名"
        label
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="tel"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '仅注册需要' }]"
      />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <div v-if="num===1">
            <van-button size="small" type="primary" @click="give">发送验证码</van-button>
          </div>
          <div v-if="num===0">
            <van-count-down :time="time" format="ss 秒" @finish="finish" />
          </div>
        </template>
      </van-field>
      <van-field v-model="verify" center clearable label="验证码" placeholder="请输入验证码">
        <template #button>
          <div v-html="msg" class="val" @click="get"></div>
        </template>
      </van-field>
      <van-button type="primary" style="margin: 16px;" @click="login">登录</van-button>
      <van-button type="danger" style="margin: 16px;" @click="registered">注册</van-button>
    </van-form>
    <div class="bottom"></div>
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
      username: "",
      password: "",
      verify: "",
      sms: "",
      tel: "",
      arr: "",
      msg: {},
      time: 6000,
      num: 1,
    };
  },
  methods: {
    finish() {
      this.num = 1;
    },
    //倒计时
    give() {
      this.num = 0;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    //注册
    registered() {
      this.$api
        .register({
          nickname: this.username,
          password: this.password,
          verify: this.verify,
        })
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
            this.$toast(res.msg);
            this.username = "";
            this.password = "";
            this.verify = "";
            this.tel = "";
            this.sms = "";
            localStorage.setItem("user", JSON.stringify(res));
            this.$router.push("Myself");
          } else {
            this.$toast(res.msg);
          }
        })
        .catch();
    },
    //验证码
    getData() {
      this.$api
        .verify()
        .then((res) => {
          this.msg = res;
        })
        .catch();
    },
    //登录
    login() {
      this.$api
        .login({
          nickname: this.username,
          password:: this.password,
           verify: this.verify,
        })
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
            this.$toast(res.msg);
            this.username = "";
            this.password = "";
            this.verify = "";
            this.tel = "";
            this.sms = "";
            localStorage.setItem("user", JSON.stringify(res));
            this.$router.push("Myself");
          } else {
            this.$toast(res.msg);
          }
        })
        .catch();
    },
    //刷新验证码
    get() {
      this.$api
        .verify()
        .then((res) => {
          this.msg = res;
          console.log(res);
        })
        .catch();
    },
  },
  mounted() {
    this.getData();
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        localStorage.setItem(
          "city",
          JSON.stringify(data.addressComponent.city)
        );
      }

      function onError(data) {}
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  height: 100vh;
  width: 100vw;
  background-color: rgb(202, 243, 229);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 90vw;
  background-color: white;
}
.title {
  color: gray;
  font-size: 25px;
  margin: 20px 0 0 10px;
  line-height: 55px;
}
.ret {
  position: absolute;
  z-index: 6;
  left: 10px;
  top: 10px;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: gray;
  color: white;
}
</style>