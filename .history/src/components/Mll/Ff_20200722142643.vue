<template>
  <div class="box">
    <div class="top">
      <div class="top1">1F</div>
      <div>{{arr1.floor1}}</div>
      <div class="box1">
        <div v-for="(item,index) in floor1" :key="index" im>
          <img :src="item.image" alt style="width:100%" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {
    floor1: {
      type: Array
    }
  },
  //注册组件
  components: {},
  data() {
    return {
      arr: [],
      arr1: {}
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.arr = res.data.floor1;
        this.arr1 = res.data.floorName;
        console.log(this.arr);
        // console.log(this.arr1);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1{
   display: grid;                                      //设置为网格布局					   
  grid-template-rows: 1fr 1fr 1fr;					   //设置行数 3行
  grid-template-columns: 1fr 1fr;					  //设置列数  2列
  grid-auto-flow: row dense;				         //已"行为"填充

}
.img1:first-child{									 //第一张图片设置样式									
   grid-row-start: 1;								//第一个图片以第一行开始
  grid-row-end: 3;									//第一个图片到第三行（不包括第三行）结束								
}

</style>