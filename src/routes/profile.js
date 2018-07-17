import ShowProfile from '../components/Dashboard/Views/Profile/ShowProfile'
import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import EditProfile from '../components/Dashboard/Views/Profile/EditProfile';

const profile = {
    path: '/',
    component: DashboardLayout,
    redirect: 'profile',
    children: [
        {
            path: 'profile',
            component: ShowProfile,
            name: 'ShowProfile',
            meta: {requireAuth: true, title: 'Profile Information', roles: ['Sales', 'SalesManager', 'SysAdmin']}
        },
        {
            path: 'profile-update',
            component: EditProfile,
            name: 'EditProfile',
            meta: {requireAuth: true, title: 'Profile Update', roles: ['Sales', 'SalesManager', 'SysAdmin']}
        },

    ]
};

export default profile;
