import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import News from '../components/News'
import User from '../components/User'




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
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
