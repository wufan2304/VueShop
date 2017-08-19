import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/components/layout'
import IndexPage from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
