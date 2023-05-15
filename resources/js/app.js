import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

import { createApp } from "vue/dist/vue.esm-bundler.js";
import router from './router';
import VacantesIndex from './components/vacantes/VacantesIndex.vue';
import ProspectosIndex from './components/prospectos/ProspectosIndex.vue';
import EntrevistasIndex from './components/entrevistas/EntrevistasIndex.vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

localStorage.theme = 'light';

const app = createApp({
    components: {
        VacantesIndex,
        ProspectosIndex,
        EntrevistasIndex
    }
});
app.use(router);
app.mount('#app');
app.component('v-select', vSelect);
app.use(VCalendar, {});