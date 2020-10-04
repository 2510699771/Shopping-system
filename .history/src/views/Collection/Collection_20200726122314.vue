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
        .list(
        )
        .then((res) => {
            console.log(res)
          this.$toast(res.msg);
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