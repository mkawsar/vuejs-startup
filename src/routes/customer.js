import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import CustomerList from '../components/Dashboard/Views/Customer/CustomerList'

const customer = {
    path: '/',
    component: DashboardLayout,
    redirect: 'customer-list',
    children: [
        {
            path: 'customer-list',
            component: CustomerList,
            name: 'CustomerList',
            meta: {requireAuth: true, title: 'Customer List', roles: ['SysAdmin', 'SuperAdmin']}
        },
    ]
};

export default customer;
