<template>
  <div class="box">
    <van-form @submit="onSubmit">
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
      <van-field
        v-model="username"
        name="短信验证码"
        label="短信验证码"
        placeholder="短信验证码"
        :rules="[{ required: true, message: '仅注册需要' }]"
      />
      <van-field
        v-model="username"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <div style="margin: 16px;">
        <div >
          <van-button type="primary">登录</van-button>
        </div>
        <div>
          <van-button type="warning">注册</van-button>
        </div>
      </div>
    </van-form>
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
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
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
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>