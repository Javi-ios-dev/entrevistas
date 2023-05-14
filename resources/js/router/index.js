import { createRouter, createWebHistory } from "vue-router";

import VacantesIndex from '../components/vacantes/VacantesIndex.vue'
import VacantesCreate from '../components/vacantes/VacantesCreate.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'vacantes.index',
        component: VacantesIndex
    },
    {
        path: '/vacantes/create',
        name: 'vacantes.create',
        component: VacantesCreate
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})