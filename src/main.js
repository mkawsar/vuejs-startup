import Vue from 'vue'
import './pollyfills'
import VueRouter from 'vue-router'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import env from './env'
import cors from 'cors'

// Plugins
import GlobalComponents from './gloablComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'

// router setup
import routes from './routes'

// library imports

import './assets/sass/paper-dashboard.scss'
import './assets/sass/element_variables.scss'
import './assets/sass/demo.scss'

import sidebarLinks from './sidebarLinks'
// plugin setup
Vue.use(VueRouter);
Vue.use(GlobalDirectives);
Vue.use(GlobalComponents);
Vue.use(VueNotify);
Vue.use(SideBar, {sidebarLinks: sidebarLinks});
Vue.use(VeeValidate);
locale.use(lang);
Vue.use(cors);

require('./bootstrap');

// backend environment setup
Vue.prototype.$env = env;

// configure localStorage

import localStorage from "./services/localStorage";
Vue.prototype.$localStorage = localStorage;
import auth from "./services/auth";
Vue.prototype.$auth = auth;
import notification from "./services/notification"
Vue.prototype.$notification = notification;
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
//Vue.http.options.xhr = { withCredentials : true };
// configure router
/*const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active'
});*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router: routes
});
