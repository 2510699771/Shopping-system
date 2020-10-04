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
        v-model="username"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '仅注册需要' }]"
      />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-field
        v-model="verify"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <van-button type="primary" style="margin: 16px;">登录</van-button>
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
      verify: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    registered() {
      this.$api
        .register({
          username: this.username,
          password: this.password,
          verify: this.verify
        })
        .then()
        .catch();
    }
  },
  mounted() {},
  watch: {},
  computed: {}
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