<template>
  <div class="box">
    <!-- 评价路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>评价中心</span>
    </div>
    <div v-if="num===0">
      <div class="ctop">
        <div>
          <img :src="this.arr.image_path" width="120px" alt />
        </div>
        <div class="score">
          <div style="margin:15px 0 0 20px">商品评分</div>
          <div style="margin:30px 0 0 20px">
            <van-rate v-model="value" />
          </div>
        </div>
      </div>
      <div>
        <van-field
          v-model="message"
          rows="2"
          autosize
          type="textarea"
          placeholder="说说你的购买感受吧~~"
          show-word-limit
          class="inpu"
        />
      </div>
      <div>
        <van-checkbox v-model="checked" checked-color="#07c160" style="margin:20px 0 0 20px">匿名购买</van-checkbox>
      </div>
      <div>
        <van-button type="primary" style="margin:20px 0 0 20px;width:90%" @click="update">提交</van-button>
      </div>
    </div>
    <div v-if="num===1">
      <div class="ctop">
        <div class="pic">
          <img :src="this.arr.image_path" width="70px" class="ig" alt />
        </div>
        <div class="score">
          <div style="margin:15px 0 0 10px">商品评分</div>
          <div style="margin:10px 0 0 10px">
            <van-rate v-model="value" />
          </div>
        </div>
        <div style="margin:15px 0 0 5px">{{this.time}}</div>
      </div>
      <div style="margin:10px 0 0 15px">评论内容：{{this.message}}</div>
      <div style="display:flex;margin:10px 0 0 15px" class="or">
        <div class="pic">
          <img :src="this.arr.image_path" width="70px" class="ig" alt />
        </div>
        <div>{{this.name}}</div>
        <div>
          <van-button type="primary" size="small"><van-icon name="shopping-cart" />点击购买</van-button>
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
      value: 0, //评价星星
      message: "", //购买感受
      checked: false, //匿名购买
      num: -1,
      time: "",
      name: "",
    };
  },
  methods: {
    update() {
      //id: 商品cid
      //rate: 分数
      //content: 内容
      //anonymous: 是否匿名
      //_id: 商品的_id
      //order_id: 商品的order_id
      //image: []
      if (this.num === 0) {
        this.$api
          .comment({
            id: this.arr.cid,
            rate: this.value,
            content: this.message,
            anonymous: this.checked,
            _id: this.arr._id,
            order_id: this.arr.order_id,
            image: [],
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //返回
    ret() {
      this.$router.push("/Evaluation");
    },
  },
  mounted() {
    this.arr = this.$route.query.Evacenter;
    this.num = this.$route.query.num;
    console.log(this.$route.query.all, "all值");
    if (this.$route.query.all) {
      this.value = this.$route.query.all.rate;
      this.message = this.$route.query.all.content;
      this.checked = this.$route.query.all.anonymous;
      this.time = this.$route.query.all.comment_time;
      this.name = this.$route.query.all.goods[0].name;
    }
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
  width: 100%;
  display: flex;
  background-color: white;
}
.score {
  display: flex;
  flex-direction: column;
}
.inpu {
  margin-top: 15px;
  background: rgba(214, 210, 210, 0.274);
  height: 150px;
}
.ig {
  border: 1px solid rgb(187, 182, 182);
  border-radius: 50%;
  margin: 10px 0 0 10px;
}
.or{
    justify-content: space-between;
    al
}
</style>