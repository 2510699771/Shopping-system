<template>
 <div>
 </div>
</template>

<script>
 export default {
   name: '',
//接受父组件传递的数据
   props: {
   },
//注册组件
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
this.$api
        .list({
          id: this.id,
        })
        .then((res) => {
          this.$toast(res.msg);
          this.num++;
        })
        .catch();
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>