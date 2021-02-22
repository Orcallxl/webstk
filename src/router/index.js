import Vue from 'vue'
import Router from 'vue-router'
import OrbitWizard from '@/components/OrbitWizard'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrbitWizard',
      component: OrbitWizard
    }
  ]
})
