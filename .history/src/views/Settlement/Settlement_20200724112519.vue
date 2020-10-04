<template>
  <div>
    <div></div>

  
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
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
      chosenContactId: null,
      editingContact: {},
      showList: true,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0,
        },
      ],
    };
  },
  methods: {
 
  },
  mounted() {
    this.id = this.$route.query; //获取id
    console.log(this.$route.query);
  },
  watch: {},
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },
};
</script>

<style scoped lang='scss'>
</style>