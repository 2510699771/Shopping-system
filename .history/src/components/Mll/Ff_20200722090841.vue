<template>
 <div class="box">

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
      .recommend()
      .then(res => {
        this.arr = res.data.recommend;
        console.log(this.arr);
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
.box{
    width: 100%;
}

</style>