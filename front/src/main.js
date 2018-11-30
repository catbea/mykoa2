// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import util from './assets/js/util'

import 'amfe-flexible'
import { Swipe, SwipeItem, Icon ,Field, Actionsheet, Toast ,Panel,Uploader   } from "vant";
import 'vant/lib/index.css'

Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(Actionsheet).use(Toast).use(Panel).use(axios).use(Uploader);
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$util = util

router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
