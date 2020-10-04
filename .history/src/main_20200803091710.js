import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './http/api'
import Uti



Vue.prototype.$api=api
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
