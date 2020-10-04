<template>
  <div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "../../components/Mll/Navigation.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
      Navigation
  },
  data() {
    return { value: "" };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>