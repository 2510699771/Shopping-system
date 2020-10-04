<template>
  <div>
    <van-button class="btn" icon="arrow-left" size="small" @click="ret"></van-button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
      <van-swipe-item>
        <img :src="this.arr.image" alt style="width:100%;height:100%;" />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="this.arr.image_path" alt style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
    <van-cell :title="this.arr.name" :label="'¥'+this.arr.present_price" class="rmb" />
    <div class="out">
      <div class="in">
        <div style="color:gray;font-size: 10px;">运费:{{this.arr.__v}}</div>
        <div style="color:gray;font-size: 10px;">剩余:{{this.arr.amount}}</div>
        <div v-if="num===0" style="font-size: 13px;" @click="Collection">
          <span style="color:gray">点击收藏:</span>
          <i class="iconfont icon-xin" style="color:red"></i>
        </div>
        <div v-if="num===1" style="font-size: 13px;" @click="cancel">
          <span style="color:gray">取消收藏:</span>
          <i class="iconfont icon-zan1-copy" style="color:red"></i>
        </div>
      </div>
    </div>
    <!-- 有赞的店(那一行) -->
    <van-cell value="进入店铺" is-link icon="shop-o">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">
          <span>有赞的店</span>
        </span>
        <van-tag type="danger" style="margin-left:5px">官方</van-tag>
      </template>
    </van-cell>

    <!-- 商品详情与商品评价 -->
    <van-tabs v-model="nane">
      <van-tab name="a" style="margin-bottom:50px">
        <template #title>商品详情</template>
        <div v-html="arr.detail"></div>
      </van-tab>
      <van-tab style="margin-bottom:50px">
        <template #title>商品评论</template>
        <div>内容1111111</div>
      </van-tab>
    </van-tabs>
    <!-- 点击购物车或者立即购买出现的购买框 -->
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <div class="buytop">
        <div class="into">
          <img :src="this.arr.image" alt style="width:100px;
             height:100px;" />
        </div>
        <div>
          <div style="margin:5px 0 0 5px">{{this.arr.name}}</div>
          <div style="margin:5px 0 0 5px;color:red;font-size:15px">¥ {{this.arr.present_price}}</div>
        </div>
      </div>
      <div class="buycon">
        <div style="margin-left:20px">
          <span>购买数量:</span>
        </div>
        <div style="margin-right:20px">
          <van-stepper v-model="value" min="1" max="50" integer></van-stepper>
        </div>
      </div>
      <div style="margin-left:20px;margin-top:10px;">
        <span style="color:gray;font-size:8px">剩余{{this.arr.amount}}</span>
        <span style="color:red;font-size:8px;margin-left:20px">每人限购不知道多少盒</span>
      </div>
      <van-button type="danger" text="立即购买"  style="width:100%" class="fastbtn"/>
    </van-popup>
    <!-- 底部商品导航 -->
    <van-goods-action style="margin-top:100px">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="gotoshop" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addshop" />
      <van-goods-action-button type="danger" text="立即购买" @click="fast" />
    </van-goods-action>
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
      id: "",
      arr: {},
      num: 0,
      nane: "a",
      goods: {},
      show: false,
      value: 1,
    };
  },
  methods: {
    //加入购物车
    addshop() {
      this.show = true;
    },
    //立即购买
    fast() {
      this.show = true;
    },
    //点击底部导航栏的购物车
    gotoshop() {
      this.$router.push("/shopping");
    },
    //收藏商品
    Collection() {
      this.$api
        .collection(this.goods)
        .then((res) => {
          console.log(res);
          this.$toast(res.msg);
          this.num = 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //取消收藏
    cancel() {
      this.$api
        .cancelCollection({ id: this.id })
        .then((res) => {
          console.log(res);
          this.$toast(res.msg);
          this.num = 0;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //返回上一页面
    ret() {
      this.$router.go("-1");
    },
  },
  mounted() {
    this.id = this.$route.query.id; //获取id
    console.log(this.$route.query.id);

    //获得单个商品数据
    this.$api
      .goods(this.id)
      .then((res) => {
        this.arr = res.goods.goodsOne;
        this.goods = res.goods.goodsOne;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    //查看该商品是否被收藏
    this.$api
      .isCollection({
        id: this.id,
      })
      .then((res) => {
        console.log(res);
        this.num = res.isCollection;
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
.my-swipe .van-swipe-item {
  background-color: rgba(178, 34, 34, 0);
  font-size: 20px;
  line-height: 70px;
}
.btn {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  left: 10px;
  top: 10px;
  background: gray;
  color: white;
}
.pic {
  color: red;
  font-size: 15px;
  margin-left: 15px;
}
.rmb {
  font-size: 15px;
  border-top: 1px solid rgba(204, 194, 194, 0.103);
  border-bottom: 1px solid rgba(204, 194, 194, 0.103);
}
.van-cell__label {
  color: red;
  font-size: 15px;
}
.out {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(204, 194, 194, 0.103);
}
.in {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.custom-title {
  text-align: center;
}
.into {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(131, 126, 126, 0.295);
}
.buytop {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.buycon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.fastbtn{
  position: absolute;
  buttom
}
</style>