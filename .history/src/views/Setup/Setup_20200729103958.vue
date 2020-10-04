<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>个人资料</span>
    </div>
    <van-cell-group>
      <van-cell value="123" />
      <van-field name label="头像">
        <template #input>
          <van-image round width="5rem" input-align="right" height="5rem" :src="arr.avatar" />
        </template>
      </van-field>
      <van-field v-model="arr.username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="arr.nickname" label="昵称" placeholder="请输入用户名" />
      <van-field v-model="arr.gender" label="性别" placeholder="请输入用户名" />
      <van-field v-model="value" label="邮箱" placeholder="请输入用户名" />
      <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm:determine"
        />
      </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
import dayjs from "dayjs";
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
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    //返回
    ret() {
      this.$router.push("Myself");
    },
  },
  mounted() {
    //拿到用户信息
    this.$api
      .queryUser({})
      .then((res) => {
        this.arr = res.userInfo;
        console.log(this.arr, "用户信息");
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