import { createRouter, createWebHistory } from "vue-router";

import EntrevistasIndex from '../components/entrevistas/EntrevistasIndex.vue'
import EntrevistasCreate from '../components/entrevistas/EntrevistasCreate.vue'
import EntrevistasEdit from '../components/entrevistas/EntrevistasEdit.vue'
import ProspectosIndex from '../components/prospectos/ProspectosIndex.vue'
import ProspectosCreate from '../components/prospectos/ProspectosCreate.vue'
import ProspectosEdit from '../components/prospectos/ProspectosEdit.vue'
import VacantesIndex from '../components/vacantes/VacantesIndex.vue'
import VacantesCreate from '../components/vacantes/VacantesCreate.vue'
import VacantesEdit from '../components/vacantes/VacantesEdit.vue'

const routes = [
    // Entrevistas
    {
        path: '/entrevistas',
        name: 'entrevistas.index',
        component: EntrevistasIndex
    },
    {
        path: '/entrevistas/:id/edit',
        name: 'entrevistas.edit',
        component: EntrevistasEdit,
        props: true
    },
    {
        path: '/entrevistas/create',
        name: 'entrevistas.create',
        component: EntrevistasCreate
    },
    // Prospectos
    {
        path: '/prospectos',
        name: 'prospectos.index',
        component: ProspectosIndex
    },
    {
        path: '/prospectos/create',
        name: 'prospectos.create',
        component: ProspectosCreate
    },
    {
        path: '/prospectos/:id/edit',
        name: 'prospectos.edit',
        component: ProspectosEdit,
        props: true
    },
    // Vacantes
    {
        path: '/vacantes',
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