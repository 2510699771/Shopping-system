//引入vant组件中俄弹出层
import {Dialog} from 'vant'
export default{
checkLogin(next){
    if(localStorage.getItem('user')){
      next();
    }else{
        Dialog.alert({
            title:'检测到您现在没有登录',
            message:'是否跳转到登录/注册页面'

        })
    }
},
checkLogin1(item, next){
    if(localStorage.getItem('user')){
      next(item);
    }else{
        Dialog.alert({
            title:'检测到您现在没有登录',
            message:'是否跳转到登录/注册页面'

        })
    }
},
}