<template>
  <div class="box">
    <!-- 评价路由 -->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>评价中心</span>
    </div>
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
      <van-button type="primary"  style="margin:20px 0 0 20px;width:90%" @click="update">提交</van-button>
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
      value: 0,  //评价星星
      message: "", //购买感受
      checked: false, //匿名购买
    };
  },
  methods: {
      update(){
//18.商品评论
       //id: 商品cid
       //rate: 分数
       //content: 内容
       //anonymous: 是否匿名
       //_id: 商品的_id
       //order_id: 商品的order_id
       //image: []
       this.$api
        .cancelCollection({ id: this.id })
        .then((res) => {
          console.log(res, "取消收藏");
          this.$toast(res.msg);
          this.num = 0;
        })
        .catch((err) => {
          console.log(err);
        });
      },
    //返回
    ret() {
      this.$router.push("/Evaluation");
    },
  },
  mounted() {
    this.arr = this.$route.query.Evacenter;
    console.log(this.$route.query.Evacenter);
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
</style>