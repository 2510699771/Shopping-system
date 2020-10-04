<template>
 <div>
     商城
<div></div>
<Bottom></Bottom>
 </div>
</template>

<script>
import Bottom from "../../components/Bottom/Bottom.vue";
import Navigation from "../../components/Mll/Navigation.vue";
 export default {
   name: '',
//接受父组件传递的数据
   props: {
   },
//注册组件
   components: {
Bottom,
Navigation,
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>