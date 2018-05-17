import Vue from 'vue';

import 'normalize.css';
import './app.pcss';

import Core from './core/core';
import AppVue from './app.vue';

Core.setOption({
  vueDebug: true,
  plugin: {
    Debugging: {
      log: true,
      error: true
    }
  }
}).run(() => {
  let app = new Vue({
    el: '#app',
    render: h => h(AppVue)
  });
});



