//默认导出
export default{
checkLogin(){
    if(localStorage.getItem('user')){

    }else{
        Dialog.alert({
            title:'检测到您现在没有登录',
            me
            
        })
    }
}
}