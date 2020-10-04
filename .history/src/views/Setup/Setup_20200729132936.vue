<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>个人资料</span>
    </div>
    <van-cell-group>
      <van-cell value="123" />
      <van-field name label="头像" input-align="right">
        <template #input>
          <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="1" />
        </template>
      </van-field>
      <van-field v-model="arr.username" label="用户名" readonly />
      <van-field v-model="arr.nickname" label="昵称" />
      <van-field v-model="arr.gender" label="性别" />
      <van-field v-model="value" label="邮箱" />
      <van-cell is-link @click="showPopup" :value="data" title="出生日期"></van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="determine"
          @cancel="ret"
        />
      </van-popup>
    </van-cell-group>
    <van-button type="primary" block @click="update">提交</van-button>
  </div>
</template>

<script>
import dayjs, { Dayjs } from "dayjs";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      value: "",
      showCalendar: false,
      arr: [],
      show: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      data: "",
      fileList: [],
    };
  },
  methods: {
    update(){
      

    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file, "8888");
    },
    showPopup() {
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    //返回
    ret() {
      this.$router.push("Myself");
    },
    determine(value) {
      let year = dayjs(value).format("YYYY");
      let month = dayjs(value).format("MM");
      let day = dayjs(value).format("DD");
      this.data = year + "年" + month + "月" + day + "日";
      console.log(this.data);
      this.show = false;
    },
  },
  mounted() {
    //拿到用户信息
    this.$api
      .queryUser({})
      .then((res) => {
        this.arr = res.userInfo;
        this.fileList.push(res.userInfo.avatar);
        console.log(this.fileList);
        console.log(this.arr, "用户信息");
        this.data =
          this.arr.year + "年" + this.arr.month + "月" + this.arr.day + "日";
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
</style>