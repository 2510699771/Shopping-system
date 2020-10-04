<template>
  <div c
  > 
      <div v-for="(item,index) in arr" :key="index" class="ig">
        <div>
          <img :src="item.image" alt style="width:50px" />
          {{item.mallCategoryName}}
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
      arr: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.arr = res.data.category;
        console.log(this.arr);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ig {
  display: flex;
}
.ig > div {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>