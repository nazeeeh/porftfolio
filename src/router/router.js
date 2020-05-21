import Vue from 'vue';
import vueRouter from 'vue-router';
import Dashboard from '../views/Dashboard';
import Project from '../views/Project';
import Bio from '../views/Bio';
import Contact from '../views/Contact'
Vue.use(vueRouter);

const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/project",
        component: Project
    },
    {
        path: "/bio",
        component: Bio
    },
    {
        path: "/contact",
        component: Contact
    }
];

const router = new vueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: 'history'
});

export default router;