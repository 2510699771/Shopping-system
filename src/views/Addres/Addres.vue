<template>
  <div>
    <!-- 地址列表路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>地址列表</span>
    </div>
    <div v-if="this.list.length>0">
      <van-address-list
        v-model="numaddress"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onchose"
      />
    </div>
    <div v-if="this.list.length===0">
      <div class="none">
        <h2>暂无收货地址~~~</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      list: [],
      disabledList: [],
      arr: {},
      numaddress: "1",
    };
  },
  methods: {
    //添加地址
    onAdd() {
      this.$router.push("/Newaddress");
    },

    //编辑地址
    onEdit(item, index) {
      //console.log(this.list[index]._id);
      this.$router.push({
        path: "/Modifyaddress",
        query: {
          address: this.list[index],
        },
      });
    },
    //返回上一页
    ret() {
      this.$router.push("/Myself");
    },
    // 点击任意地址时触发 选择地址地址给我的订单中
    onchose(item, index) {
      //   Toast("选择成功");
      //   this.$router.push({
      //     path: "Settlement",
      //     query: {
      //       info: item, //把点击到的地址信息给订单结算
      //     },
      //   });
    },
  },
  mounted() {
    this.Settlement = JSON.stringify(localStorage.getItem("numaddress2"));
    localStorage.removeItem("numaddress2");
    //拿到所有用户收货地址
    this.$api
      .getAddress()
      .then((res) => {
        console.log(res.address);
        this.list = res.address;

        //循环拿到的所有地址如果为默认地址把默认地址放在首位
        this.list.sort((item) => {
          return item.isDefault === true;
        });
        this.list.map((item, index) => {
          if (item.isDefault === true) {
            this.list.splice(index, 1);
            this.list.unshift(item);
          }
        });
        //给拿到的数据添加一个id
        this.list.map((item, index) => {
          this.$set(item, "id", String(index + 1));
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
.none {
  width: 100%;
  height: 500px;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>