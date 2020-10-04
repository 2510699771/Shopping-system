<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>最近浏览</span>
    </div>
    <div v-for="(item,index) in arr" :key="index">
      <van-card
        :price="item.present_price | toFixed"
        :title="item.name"
        :thumb="item.image"
        @click="go(item)"
      >
        <template #footer>
          <van-button size="mini" @click="del(item.index)">删除</van-button>
        </template>
      </van-card>
    </div>
    <div v-if="this.arr.length===0">
      <div class="none">
        <h2>暂无浏览历史~~~</h2>
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
      arr: [], //用于接收全部最近浏览的信息
    };
  },
  methods: {
    //点击跳转到详情页
    go(item) {
      this.$router.push({
        path: "/Details",
        query:{
            id:item.id
        }
      });
    },
    //点击返回到我的页面
    ret() {
      this.$router.push("/Myself");
    },
    //点击删除按钮
    del(item, index) {  
      this.arr.splice(index, 1);
      localStorage.removeItem("Recently_look");
      localStorage.setItem("Recently_look", JSON.stringify(this.arr));
    },
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("Recently_look"));
    console.log(this.arr, "arr");
  },
  watch: {},
  computed: {},
  filters: {
    //过滤器
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
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