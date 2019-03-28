import Vue from 'vue';
import AppVue from './App.vue';
import Home from './Home';
import Gtntric from './Gtntric';
import Elements from './Elements';
import VueRouter from 'vue-router';

import './index.pug';
import './index.sass';


Vue.use(VueRouter);

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  }
});

const routes = [
  { path: '/', component: Home},
  { path: '/gtntric', component: Gtntric },
  { path: '/elements', component: Elements }
];

const router = new VueRouter({
  routes
});

export default () => {

  const app = new Vue({
    router,
    render: createElem => createElem(AppVue),
  }).$mount("#main");

};
