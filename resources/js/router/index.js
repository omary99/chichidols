import Dashboard from '../components/Dashboard.vue';
import ListAppointments from '../pages/Appointments/ListAppointments.vue';
import ListUsers from '../pages/users/ListUsers.vue';
import UpdateSetting from '../pages/settings/UpdateSetting.vue';
import UpdateProfile from '../pages/profile/UpdateProfile.vue';

export default [
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },

    {
        path: '/admin/appointments',
        name: 'appointments',
        component: ListAppointments,
    },

    {
        path: '/admin/users',
        name: 'admin.appointments',
        component: ListUsers,
    },

    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: UpdateSetting,
    },

    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: UpdateProfile,
    },

    
]