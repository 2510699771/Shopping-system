//默认导出
import {Dialog} from 'vant'
export default{
checkLogin(next1){
    console.log(next1);
    if(localStorage.getItem('user')){
      next1() 
    }else{
        Dialog.alert({
            title:'检测到您现在没有登录',
            message:'是否跳转到登录/注册页面'

        })
    }
}
}