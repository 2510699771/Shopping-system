<template>
  <div>阿萨德</div>
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
      id: "",
    };
  },
  methods: {},
  mounted() {
     this.id= this.$route.query.id
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>