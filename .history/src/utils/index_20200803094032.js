//默认导出
export default{
checkLogin(next){
    if(localStorage.getItem('user')){

    }else{
        Dialog.alert({
            title:'检测到您现在没有登录',
            message:'是否跳转到登录/注册页面'

        })
    }
}
}