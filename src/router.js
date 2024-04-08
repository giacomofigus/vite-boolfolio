import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue'
import AppMain from './components/AppMain.vue'


const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/',
            name: 'progetti',
            component: AppMain
        }
    ]
});

export {router};