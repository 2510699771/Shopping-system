<template>
  <div class="all">
    <!-- 我的订单路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>我的订单</span>
    </div>
    <div class="box">
      <div v-for="(item,index) in arr" :key="index" class="box1">
        <div class="ctop">
          <div class="cid">
            <div>{{item.order_id}}</div>
            <div class="ok">交易完成</div>
          </div>
          <div style="margin-top:10px">
            <div v-for="(item1,index1) in item.order_list" :key="index1" class="cc">
              <div style="width:100px;height:100px；">
                <img :src="item1.image_path" alt width="90px" />
              </div>
              <div style="width:80%;margin-left:10px;font-size:15px">{{item1.name}}</div>
              <div style="margin-left:5px">
                <div style="font-size:15px">&#165;{{item1.present_price}}</div>
                <div style="font-size:13px" class="many">X{{item1.count}}</div>
              </div>
            </div>
          </div>

          <div class="bottom">创建时间:{{item.add_time}}</div>
          <div class="bottom">创建地址:{{item.address}}</div>
          <div class="bottom" style="margin-bottom:5px">共件商品 合计:{{item.mallPrice}}</div>
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
    };
  },
  methods: {
    ret() {
      this.$router.push("/myself");
    },
  },
  mounted() {
    this.$api
      .getMyOrder()
      .then((res) => {
        this.arr = res.list;
        console.log(this.arr);
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
.ctop {
  width: 95%;
  border: 1px solid rebeccapurple;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 20px;
}
.cid {
  margin-top: 10px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cc {
  display: flex;
  width: 95%;
}
.box {
  width: 100%;
  display: flex;
  border: 1ps solid firebrick;
  flex-direction: column;
  justify-content: center;
}
.ok {
  color: orange;
}
.many {
  color: rgb(187, 182, 182);
  margin-top: 5px;
}
.bottom {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
  font-size: 14px;
  margin-top: 5px;
}
.all {
  background-color: rgba(214, 209, 209, 0.274);
  width: 100%;
}
.box1{
    display: flex;
    justify-content: center;
}
</style>