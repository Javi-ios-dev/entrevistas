import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useVacantes() {
    const vacante = ref([]);
    const vacantes = ref([]);
    const errors = ref('');
    const router = useRouter();

    const getVacante = async (id) => {
        let response = await axios.get('/api/vacantes/' + id);
        vacante.value = response.data.data;
    }

    const getVacantes = async () => {
        let response = await axios.get('/api/vacantes');
        vacantes.value = response.data.data;
    }

    const storeVacante = async (data) => {
        errors.value = '';
        try {
            await axios.post('/api/vacantes/', data);
            await router.push({ name: 'vacantes.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateVacante = async (id) => {
        errors.value = '';
        try {
            await axios.put('/api/vacantes/' + id, vacante.value);
            await router.push({ name: 'vacantes.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyVacante = async (id) => {
        await axios.delete('/api/vacantes/' + id);
    }

    return {
        vacante,
        vacantes,
        errors,
        getVacante,
        getVacantes,
        storeVacante,
        updateVacante,
        destroyVacante,
    }
}