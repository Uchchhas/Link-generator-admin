import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/auth/Login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register')
    },
    {
        path: '/forget-password',
        name: 'forget-password',
        component: () => import('../views/auth/ForgetPassword')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/user/Profile')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/settings/Index')
    },
    {
        path: '/dashboard',
        name: 'home',
        component: () => import('../views/dashboard/Index')
    },
    {
        path: '/biolinks',
        name: 'biolinks',
        component: () => import('../views/biolinks/Index')
    },
    {
        path: '/create-biolinks',
        name: 'create-biolink',
        component: () => import('../views/biolinks/BiolinksCreateView')
    },
    {
        path: '/preview-biolinks',
        name: 'preview-biolinks',
        component: () => import('../views/biolinks/BiolinkPreviewView')
    },
    {
        path: '/links',
        name: 'links',
        component: () => import('../views/links/Index')
    },
    {
        path: '/link-groups',
        name: 'link-groups',
        component: () => import('../views/link-groups/Index')
    },
    {
        path: '/workspaces',
        name: 'workspaces',
        component: () => import('../views/workspaces/Index')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
