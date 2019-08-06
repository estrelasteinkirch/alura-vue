import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
// importando o router!
import VueRouter from 'vue-router';
// tem que vir entre chaves, porque não é default
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/teste.css';


const router = new VueRouter({
  routes : routes,
  mode: 'history'
});

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

// registrando o router
Vue.use(VueRouter);

Vue.use(VueResource); 
Vue.http.options.root = 'http://localhost:3000';

// registrando o plugin 
Vue.use(VeeValidate);


new Vue({
  el: '#app',
  router,
  
  render: h => h(App)
})
