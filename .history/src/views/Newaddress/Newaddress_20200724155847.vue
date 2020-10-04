<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>新增地址</span>
    </div>
    <van-address-edit
      :area-list="area"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import area from "../../../area.js"; //搜索框
import { Toast } from "vant";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      area,
      searchResult: [],  //详细地址搜索结果
      default:false,
    };
  },
  methods: {
    ret() {
      this.$router.go("-1");
    },
    onSave(content) {
      this.$api
        .address({
          id: content.id,
          tel

        })
        .then((res) => {
          this.$toast(res.msg);
          this.num++;
        })
        .catch();
      console.log(content)
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {},
  },
  mounted() {},
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