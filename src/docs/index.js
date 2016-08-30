/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Configs */
import './config.js';
import routes from './routes.js';
import App from './App';


Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  routes
});

let Docs = Vue.component('app', App);

Docs = new Docs({
  el: '#app',
  router
});

router.afterEach(() => {
  document.querySelector('.main-content').scrollTop = 0;
});
