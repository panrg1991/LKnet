import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/All'
import User from '@/components/User'
import Shift from '@/components/Shift'
import Machine from '@/components/Machine'
import State from '@/components/State'
import Plan from '@/components/Plan'
import Count from '@/components/Count'
import Record from '@/components/Record'
import Mould from '@/components/Mould'
import warning from '@/components/warning'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/All'
    },
    {
      path: '/All',
      name: 'All',
      component: All
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Shift',
      name: 'Shift',
      component: Shift
    },
    {
      path: '/Machine',
      name: 'Machine',
      component: Machine
     },
     {
      path: '/State',
      name: 'State',
      component: State
     },
     {
      path: '/Plan',
      name: 'Plan',
      component: Plan
     },
     {
      path: '/Count',
      name: 'Count',
      component: Count
     },
     {
      path: '/Record',
      name: 'Record',
      component: Record
     },
     {
      path: '/Mould',
      name: 'Mould',
      component: Mould
     },
     {
      path: '/warning',
      name: 'warning',
      component: warning
     }
  ]
})
