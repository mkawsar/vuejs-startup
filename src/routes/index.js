import Vue from 'vue';
import routes from './routes';
import Router from 'vue-router';
import authService from '../services/auth';

Vue.use(Router);

const router = createRouter();

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        const token = window.localStorage.getItem('token');
        let user = JSON.parse(window.localStorage.getItem('user'));
        if (!token) {
            next({ path: '/login' });
            return false;
        } else {
            let routeRoles = to.meta.roles;
            let storageRoles = authService.roles();

            if (routeRoles && storageRoles) {
                if (routeRoles.some(routeRole => storageRoles.includes(routeRole))) {
                    next();
                } else {
                    next({path: '/login'});
                    return false;
                }
            } else {
                next({path: '/login'});
                return false;
            }
        }
    }
    next();
});

/*router.afterEach((to, from) => {
    setTimeout(() => NProgress.done(), 500);
});*/

export default router

function createRouter() {
    const router = new Router({
        routes,
        linkActiveClass: 'active'
    });

    return router
}
