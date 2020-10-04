<template>
  <div class="yy">
    <div class="box1">
      <div v-for="(item,index) in arr" :key="index" class="ig">
        <div  @click="kid_index(item,index)">
          <img :src="item.image" alt style="width:50px" />
          {{item.mallCategoryName}}
        </div>
      </div>
    </div>
  </div>
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
      arr: []
    };
  },
  methods: {
    kid_index(item,index){
      this.$router.push({
        path:'/Kind',
        quary:{
          
        }
      })
    }
  },
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.arr = res.data.category;
        console.log(res.data);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ig {
  display: flex;
  flex-direction: column;
}
.ig > div {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.box1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  width: 95%;
  height: 85px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 1px rgba(129, 125, 125, 0.9);
  background-color: white;
}
.yy{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
}
</style>