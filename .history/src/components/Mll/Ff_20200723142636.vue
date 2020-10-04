<template>
  <div class="box" style="background-color:white;margin-top:20px">
    <div>
      <div class="top">
        <div v-if="floorname==='休闲食品'" class="top1">1F</div>
        <div v-if="floorname==='新鲜水果'" class="top1">2F</div>
        <div v-if="floorname==='营养奶品'" class="top1">3F</div>
      </div>
      <div class="box1">
        <div v-for="(item,index) in floor" :key="index" class="img1" @click="tid(item,index)">
          <img :src="item.image" alt style="width:100%;height:100%;" />
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
    floor: {
      type: Array
    },
    floorname: {
      type: String
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
  methods: {
    tid(item,{}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  display: grid; //设置为网格布局
  grid-template-rows: 1fr 1fr 1fr; //设置行数 3行
  grid-template-columns: 1fr 1fr; //设置列数  2列
  grid-auto-flow: row dense; //以"行"为填充
}
.img1:first-child {
  //第一张图片设置样式
  grid-row-start: 1; //第一个图片以第一行开始
  grid-row-end: 3; //第一个图片到第三行（不包括第三行）结束
}
.top {
  display: flex;
  margin-top: 10px;
  background-color: white;
  align-items: center;
  height: 30px;
  border: 1xp solid rgb(33, 10, 77);
  color: red;
  justify-content: center;
}
.top1 {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
}
</style>