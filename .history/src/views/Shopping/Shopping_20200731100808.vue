<template>
  <div>
    <div class="top">
      <span>购物车</span>
    </div>
    <div ></div>
    <div v-if="this.arr.length>0">
    <div>
      <div class="topall">
        <div>
          <van-checkbox v-model="checkAll" @click="choseall">全选</van-checkbox>
        </div>
        <div style="margin-right:30px">
          <div>合计:{{allmoney | toFixed}}</div>
          <div>
            <span>请确认订单</span>
          </div>
        </div>
      </div>
      <div class="btn" v-if="num === true">
        <van-button plain type="primary" style="margin-right:10px" @click="del">删除</van-button>
        <van-button plain type="info" @click="goseet">去结算</van-button>
      </div>
    </div>
    <div v-for="(item,index) in arr" :key="index" class="box">
      <div class="left">
        <van-checkbox v-model="item.check" @click="chose(item,index)" @change="changeone"></van-checkbox>
      </div>
      <div>
        <img :src="item.image_path" alt width="100px" />
      </div>
      <div class="right">
        <div style="color:red">{{item.name}}</div>
        <div class="conterright">
          <div style="color:red;margin-right:10px">¥{{item.present_price*item.count | toFixed}}</div>
          <div style="margin-right:20px">
            <van-stepper
              v-model="item.count"
              min="1"
              @plus="plus(item,index)"
              @minus="minus(item,index)"
            />
          </div>
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
      num: false,
      checkAll: false,
      allprice: 0,
      msg: [],
      trueinfo: [],
    };
  },
  methods: {
    //循环数组拿到所有为选中的商品然后那拿到的商品用下标进行删除
    del() {
      this.arr.map((item, index) => {
        if (item.check === true) {
          this.msg.push(item.cid);
          this.arr.splice(index, 1);
        }
      });
      this.$api
        .deleteShop(this.msg)
        .then((res) => {
          console.log(res, "商品删除");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //步进器增加发送请求
    plus(item, index) {
      this.$api
        .editCart({
          count: item.count + 1,
          id: item.cid,
          mallPrice: item.mallPrice,
        })
        .then((res) => {
          console.log(res, "购物车加减");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //步进器减少发送请求
    minus(item, index) {
      this.$api
        .editCart({
          count: item.count - 1,
          id: item.cid,
          mallPrice: item.mallPrice,
        })
        .then((res) => {
          console.log(res, "购物车加减");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //全选功能
    choseall() {
      this.arr.map((item) => {
        item.check = this.checkAll;
      });
    },
    changeone() {
      this.checkAll = this.arr.every((item) => {
        return item.check === true;
      });
      this.num = Boolean(this.checkAll);
    },
    chose(item, index) {
      this.num = this.arr.some((item) => {
        return item.check === true;
      });
    },
    //点击结算
    goseet() {
      this.arr.map((item) => {
        if (item.check === true) {
          this.trueinfo.push(item);
        }
      });
      console.log(this.trueinfo);
      localStorage.setItem("trueinfo",JSON.stringify(this.trueinfo))
      this.$router.push("/Settle")
    },
  },
  mounted() {
    localStorage.removeItem("trueinfo") //商品信息格式化
    //拿到购物车数据
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
      return pic;
    },
  },
  filters: {
    //过滤器
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
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