import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import News from '../components/News'
import User from '../components/User'
import GnNews from '../components/GnNews'
import AboutUs from '../components/AboutUs'





Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect:"/home"
    },
    {
      // 此处path路径大小写不敏感
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
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
