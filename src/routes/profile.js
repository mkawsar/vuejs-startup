import ShowProfile from '../components/Dashboard/Views/Profile/ShowProfile'
import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

const profile = {
    path: '/',
    component: DashboardLayout,
    redirect: 'profile',
    children: [
        {
            path: 'profile',
            component: ShowProfile,
            name: 'ShowProfile',
            meta: {requireAuth: true, title: 'Profile', roles: ['Sales', 'SalesManager', 'SysAdmin']}
        }
    ]
};

export default profile;
