<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>个人资料</span>
    </div>
    <van-cell-group>
      <van-cell value="内容" />
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
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
      uploader: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      value: " ",
    };
  },
  methods: {
    ret() {
      this.$router.go("-1");
    },
  },
  mounted() {},
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
</style>