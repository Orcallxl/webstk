// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import  'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import * as echarts  from 'echarts'
import ElementUI from 'element-ui'
import * as Cesium from 'cesium'
import * as widgets from 'cesium/Source/Widgets/widgets.css'

window.Cesium = Cesium
Vue.prototype.widgets = widgets
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI)
Vue.use(echarts)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
