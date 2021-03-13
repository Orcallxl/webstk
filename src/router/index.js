import Vue from 'vue'
import Router from 'vue-router'
import OrbitWizard from '@/components/OrbitWizard'
import CeZhan from '@/components/CeZhan'
import TJDN from '@/components/TJDN'
import TJDNDialog from '@/components/TJDNDialog'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/OrbitWizard',
      name: 'OrbitWizard',
      component: OrbitWizard
    },
    {
      path:'/CeZhan',
      name:'CeZhan',
      component:CeZhan
    },
    {
      path:'/TJDN',
      name:'TJDN',
      component:TJDN
    },
    {
      path:'/TJDNDialog',
      name:'TJDNDialog',
      component:TJDNDialog
    }
  ]
})
