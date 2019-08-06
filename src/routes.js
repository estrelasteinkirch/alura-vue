import Home from './components/home/Home.vue';
// import Cadastro from './components/cadastro/Cadastro.vue';
//Lazy loading:
// const Cadastro = () =>MediaKeySystemAccess.import('./components/cadastro/Cadastro.vue'); ->>> esse nao funcionou
const Cadastro = resolve => require(['./components/cadastro/Cadastro.vue'], m => resolve(m.default));



export const routes = [

  { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
  { path: '/cadastro/', name:'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
  { path: '/cadastro/:id', name:'altera', component: Cadastro, titulo: 'Cadastro', menu: false },
  { path: '*', component: Home, menu: false }
];