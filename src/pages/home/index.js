import Vue from 'vue';
import AppVue from './App.vue';

import './index.pug';
import './index.sass';

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


export default () => {

  new Vue({
    el: '#main',
    render: createElem => createElem(AppVue),
  });

};
