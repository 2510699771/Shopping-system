<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>我的收藏</span>
    </div>
    <div v-for=" (item,index) in arr" :key="index">
      <van-card
        :price="item.present_price"
        :title="item.name"
        :thumb='item.image_path'
      >
        <template #footer>
          <van-button size="mini" icon="cross" @click="del(item,index)"></van-button>
        </template>
      </van-card>
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
      this.$router.go("-1");
    },

  },
  mounted() {
    this.$api
      .list()
      .then((res) => {
        this.arr = res.data.list;
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
.van-card__price{color: red;}
</style>