<template>
 <div>
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
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
    this.id = this.$route.query; //获取id
    console.log(this.$route.query);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>