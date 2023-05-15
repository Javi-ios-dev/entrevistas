import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

import { createApp } from "vue/dist/vue.esm-bundler.js";
import router from './router';
import VacantesIndex from './components/vacantes/VacantesIndex.vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

localStorage.theme = 'light';

const app = createApp({
    components: {
        VacantesIndex
    }
});
app.use(router);
app.mount('#app');
app.component('v-select', vSelect);