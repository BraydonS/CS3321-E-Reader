import {createRouter, createWebHistory} from 'vue-router'

import LibraryPage from '../views/LibraryPage.vue'
import LoginPage from '../views/LoginPage.vue'
import BookReader from '../views/BookReader.vue'


const routes = [
    {
        path: '/library',
        name: 'Library',
        component: LibraryPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/reader',
        name: 'Reader',
        component: BookReader,
        props: true
    },
    {
        path: '/', 
        redirect: '/library'
   }
    
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
export default router