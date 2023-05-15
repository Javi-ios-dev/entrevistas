import { createRouter, createWebHistory } from "vue-router";

import VacantesIndex from '../components/vacantes/VacantesIndex.vue'
import VacantesCreate from '../components/vacantes/VacantesCreate.vue'
import VacantesEdit from '../components/vacantes/VacantesEdit.vue'

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
    },
    {
        path: '/vacantes/:id/edit',
        name: 'vacantes.edit',
        component: VacantesEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})