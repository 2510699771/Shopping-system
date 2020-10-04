import service from './index'

export default{

    //1.登录
    //username：用户名
    //passname：密码
    //verify:验证码
    login({
            username,
            passname,
            verify
        }) {
        return service.post('/login', {
            username,
            passname,
            verify
        })
    },

    //2.获取首页数据
    recommend() {
        return service.get('/recommend')
    },

    //3.搜索
    //value: 搜索关键词
    search({
            value
        }) {
        return service.post('/search', {value})
    },

    //4.分类查询
    //id:默认分类的id
    classification(id) {
        return service.get(`/classification?mallSubId=${id}`)
    },

    //5.查询获取购物车数据
    getCard() {
        return service.post('/getCard')
    },

    //6.购物车加减商品
    //count: 购物车数量
    //id: 商品id
    //mallPrice: 价格
    editCart({
        count, id, mallPrice
    }) {
        return service.post('/editCart', {
         count, id, mallPrice
        })
    },

    //7.购物车商品删除
    //id: 商品id(数组)
    deleteShop(id) {
        return service.post('/deleteShop',id)
    },

     //8.购物车支付页面
     // address: 收货地址
     // tel: 电话
     // orderId: 所有商品的id(数组)
     // totalPrice: 总价格
     // idDirect: 用来判断是购物车结算还是直接购买(直接购买为true, 购物车结算为false)
     // count: 商品数量
     order(
         address, tel, orderId, totalPrice, idDirect, count
     ) {
         return service.post('/order', {
         address, tel, orderId, totalPrice, idDirect, count
         })
     },

     //9.单个商品详情
     //id:商品的id
     goods(id) {
         return service.get(`/goods/one?id=${id}`)
     },

      //10.收藏单个商品
      //goods: 商品的详情信息
      collection(
          obj
      ) {
          return service.post('/collection', 
              obj
          )
      },

       //11.取消收藏
       //goods: 商品的详情信息
       cancelCollection({
           id
       }) {
           return service.post('/cancelCollection', {
            id
           })
       },

       //12.查询商品是否已收藏
       //id:商品的id
       isCollection({
           id
       }) {
           return service.post('/isCollection', {
               id
           })
       },

       //13.加入购物车
       //id:商品的id
       addShop({
           id
       }) {
           return service.post('/addShop', {
               id
           })
       },

       //14.退出登录
       loginOut({}) {
           return service.post('/loginOut', {})
       },

       //15.获取用户信息
       queryUser({}) {
           return service.post('/queryUser', {})
       },

       //16.修改保存用户信息
       //gender: 性别
       //year: 年
       //month: 月
       //day: 日
       //id: 用户id
       //nickname: 昵称
       saveUser({
           gender, year, month, day, id, nickname
       }) {
           return service.post('/saveUser', {
            gender, year, month, day, id, nickname
           })
       },

       //17.查询用户订单数量
       myOrder() {
           return service.get('/myOrder/orderNum')
       },

       //18.商品评论
       //id: 商品cid
       //rate: 分数
       //content: 内容
       //anonymous: 是否匿名
       //_id: 商品的_id
       //order_id: 商品的order_id
       //image: []
       comment({
           id, rate, content, anonymous, _id, order_id, image
       }) {
           return service.post('/goodsOne/comment', {
           id, rate, content, anonymous, _id, order_id, image
           })
       },

       //19.获取登录注册默认验证码
       verify() {
           return service.get('/verify')
       },

       //20.查询用户收货地址
       getAddress() {
           return service.get('/getAddress')
       },

        //21.查询默认收货地址
        getDefaultAddress() {
            return service.get('/getDefaultAddress')
        },

        //22.设置默认收货地址
        //id: 地址id
        setDefaultAddress({
            id
        }) {
            return service.post('/setDefaultAddress', {
                id
            })
        },

        //23.增加收货地址
        //name: 用户名
        //tel: 电话
        //address: (省 + 市 + 区 + 详情地址)
        //isDefault: 是否默认
        //province: 省
        //city: 市
        //county: 区
        //addressDetail: 详情地址，
        //areaCode: 地区代码
        //id: 修改地址时候要传id
        address({
           name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id
        }) {
            return service.post('/address', {
            name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id
            })
        },

        //24.删除地址
        //id: 地址id
        deleteAddress({
            id
        }) {
            return service.post('/deleteAddress', {
                id
            })
        },

        //25.查询我的收藏
        list() {
            return service.get('/collection/list')
        },

        //26.注册
        //nickname: 用户名
        //password: 密码
        //verify: 验证码
        register({
            nickname,
            password,
            verify
        }) {
            return service.post('/register', {
                nickname,
                password,
                verify
            })
        },

         //27.订单查询
         getMyOrder() {
             return service.get('/myOrder')
         },

          //28.查询已评价
          alreadyEvaluated() {
              return service.get('/alreadyEvaluated')
          },

          //29.查询未评价
          tobeEvaluated() {
              return service.get('/tobeEvaluated')
          },

           //30.查询单条评论
           //id: 商品id
           //_id: 数据库的那条id
            evaluateOne({
                id, _id
            }) {
                return service.post('/evaluateOne', {
                id, _id
                })
            },
}