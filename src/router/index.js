import Vue from 'vue'
import Router from 'vue-router'
//普通加载
//import homepage from '@/components/homepage'
//import workpage from '@/components/workpage'
//import otherpage from '@/components/otherpage'
//按需加载
const homepage = () => import( /* webpackChunkName: "homepage" */ '@/components/homepage')
const workpage = () => import( /* webpackChunkName: "workpage" */ '@/components/workpage')
const otherpage = () => import( /* webpackChunkName: "otherpage" */ '@/components/otherpage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/workpage',
      name: 'workpage',
      component: workpage
    },
    {
      path: '/otherpage',
      name: 'otherpage',
      component: otherpage
    },
    // 重定向
    {
      path: '/',
      redirect: '/homepage'
    }
  ]
})
