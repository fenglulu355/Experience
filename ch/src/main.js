// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import httpUrl from "../src/utils/url"
import 'lib-flexible'

import Vant from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.use(Vant);


Vue.prototype.$axios = Axios
Vue.prototype.httpUrl = httpUrl;
// Axios.defaults.baseURL = "http://chst.com/";
Axios.defaults.baseURL = "http://chst.public.5151fw.com/";
Axios.defaults.headers["Content-type"] = "application/json";


import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll);

import pubEvent from './utils/pub'
Vue.prototype.pEvent = pubEvent

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
