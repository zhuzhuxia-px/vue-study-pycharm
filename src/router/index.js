import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import News from '../components/News'
import User from '../components/User'
import GnNews from '../components/GnNews'





Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/GnNews/:hhh',
      name: 'GnNews',
      component: GnNews
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
