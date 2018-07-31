import Vue from 'vue';
import Router from 'vue-router';
import Info from '@/components/Info';
import Index from '@/components/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    }
  ]
})
