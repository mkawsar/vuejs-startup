import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'
// Login page
import Login from 'src/components/auth/Login'
// Forms pages
import RegularForms from 'src/components/Dashboard/Views/Forms/RegularForms.vue'
import ExtendedForms from 'src/components/Dashboard/Views/Forms/ExtendedForms.vue'
import ValidationForms from 'src/components/Dashboard/Views/Forms/ValidationForms.vue'
import Wizard from 'src/components/Dashboard/Views/Forms/Wizard.vue'

// TableList pages
import RegularTables from 'src/components/Dashboard/Views/Tables/RegularTables.vue'
import ExtendedTables from 'src/components/Dashboard/Views/Tables/ExtendedTables.vue'
import PaginatedTables from 'src/components/Dashboard/Views/Tables/PaginatedTables.vue'
import profile from './profile'


let formsMenu = {
    path: '/forms',
    component: DashboardLayout,
    redirect: '/forms/regular',
    children: [
        {
            path: 'regular',
            name: 'Regular Forms',
            component: RegularForms
        },
        {
            path: 'extended',
            name: 'Extended Forms',
            component: ExtendedForms
        },
        {
            path: 'validation',
            name: 'Validation Forms',
            component: ValidationForms
        },
        {
            path: 'wizard',
            name: 'Wizard',
            component: Wizard
        }
    ]
};

let tablesMenu = {
    path: '/table-list',
    component: DashboardLayout,
    redirect: '/table-list/regular',
    children: [
        {
            path: 'regular',
            name: 'Regular Tables',
            component: RegularTables
        },
        {
            path: 'extended',
            name: 'Extended Tables',
            component: ExtendedTables
        },
        {
            path: 'paginated',
            name: 'Paginated Tables',
            component: PaginatedTables
        }]
};

let loginPage = {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {title: 'Login'}
};


const routes = [
    formsMenu,
    tablesMenu,
    loginPage,
    {
        path: '/',
        component: DashboardLayout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Overview,
                meta: {requireAuth: true, title: 'Dashboard', roles: ['Sales', 'SalesManager', 'SysAdmin']}
            }
        ]
    },
    profile,
    {
        path: '*',
        component: NotFound
    }
];


export default routes
