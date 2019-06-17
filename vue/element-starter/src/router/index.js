import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  login
} from 'pages/';

//this.$router this.$route
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '登录',
    hidden: true,
    //路由配置组件，放在pages文件里面，不用放在component里面
    component: login
  }
];

export default new VueRouter({
  routes,
  // strict: process.env.NODE_ENV !=='production'
})
