<template>
 <div>
     <!-- 我的订单路由 -->

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
        })
        .then((res) => {
          console.log(res);
          Toast(res.msg);
          this.$router.go("-1");
          console.log(content);
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