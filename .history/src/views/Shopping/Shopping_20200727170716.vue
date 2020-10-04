<template>
  <div>
    <div class="top">
      <span>订单结算</span>
    </div>
    <div class="topall">
      <div>
        <van-checkbox v-model="checkAll" @click="choseall">全选</van-checkbox>
      </div>
      <div>
        <div>合计:{{allmoney|two}}</div>
        <div>
          <span>请确认订单</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button plain type="primary" style="margin-right:10px">删除</van-button>
      <van-button plain type="info">去结算</van-button>
    </div>

    <div v-for="(item,index) in arr" :key="index" class="box">
      <div class="left">
        <van-checkbox
          v-model="item.check"
          @click="chose(item,index)"
          @change="changeone"
          shape="square"
        ></van-checkbox>
      </div>
      <div>
        <img :src="item.image_path" alt width="100px" />
      </div>
      <div class="right">
        <div style="color:red">{{item.name}}</div>
        <div class="conterright">
          <div style="color:red;margin-right:10px">¥{{item.present_price}}</div>
          <div style="margin-right:20px">
            <van-stepper v-model="item.value" min="1" />
          </div>
        </div>
      </div>
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
      arr: [],
      value: 1,
      num: 0,
      checkAll: false,
      allprice: 0,
    };
  },
  methods: {
    choseall() {
      this.arr.map((item) => {
        item.check = this.checkAll;
      });
    },
    changeone() {
      this.checkAll = this.arr.every((item) => {
        return item.check === true;
      });
    },
    chose(item, index) {
      this.allprice;
    },
  },
  mounted() {
    this.$api
      .getCard()
      .then((res) => {
        this.arr = res.shopList;
        console.log(this.arr, "购物车数据");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    allmoney() {
      let pic = 0;  
      this.arr.map((item) => {
        if (item.check === true) {
          pic += item.present_price * item.count;
        }
      });
    },
  },
  filters:{
    two:function(data){
      return data
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  width: 90%;
  height: 100%;
  margin-top: 20px;
  margin-left: 20px;
  border-top: 1px solid rgba(212, 208, 208, 0.219);
  border-bottom: 1px solid rgba(212, 208, 208, 0.219);
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .conterright {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
.top {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(182, 161, 161, 0.26);
  border: 1px solid rgba(194, 178, 178, 0.267);
}
.topall {
  display: flex;
  width: 90%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  border-top: 1px solid rgba(212, 208, 208, 0.219);
  border-bottom: 1px solid rgba(212, 208, 208, 0.219);
}
.btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
</style>