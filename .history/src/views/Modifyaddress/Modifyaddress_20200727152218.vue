<template>
  <div>
    <!--修改地址路由-->
    <div class="top">
      <van-icon name="arrow-left" @click="ret" class="ret" />
      <span>修改地址</span>
    </div>
    <van-address-edit
      :area-list="area"
      show-delete
      show-set-default
      show-search-result
      :address-info="address"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import area from "../../../area.js";
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
      searchResult: [], //详细地址搜索结果
      address: {},
    };
  },
  methods: {
    ret() {
      this.$router.go("-1");
    },
    onSave(content) {
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address: content.province + content.city + content.county,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id: this.address._id,
        })
        .then((res) => {
          console.log(res);
          Toast(res.msg);
          this.$router.go("-1");
        })
        .catch();
      console.log(content);
    },
    //删除地址
    onDelete() {
      this.$api
        .deleteAddress({
          id: this.address._id,
        })
        .then((res) => {
          Toast(res.msg);
          this.$router.go("-1");
        })
        .catch();
    },
    onChangeDetail(val) {},
  },
  mounted() {
    
    this.address = this.$route.query.address;
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
</style>