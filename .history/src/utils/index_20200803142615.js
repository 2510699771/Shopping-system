//默认导出
import {Dialog} from 'vant'
export default{
checkLogin(item, next){
    console.log(next1);
    if(localStorage.getItem('user')){
      next(item);
    }else{
        Dialog.alert({
            title:'检测到您现在没有登录',
            message:'是否跳转到登录/注册页面'

        })
    }
}
}