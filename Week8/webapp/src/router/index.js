import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Registration from '@/components/Registration';
import Products from '@/components/Products';
// import Weather from '@/components/Weather';

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
      path: '/registration',
      component: Registration
    },
    {
      path: '/products',
      component: Products
    }
  ]
})
