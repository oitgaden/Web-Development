import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Forms from '@/components/Forms';
import Tables from '@/components/Tables';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/forms',
      component: Forms
    },
    {
      path: '/tables',
      component: Tables
    }
  ]
})
