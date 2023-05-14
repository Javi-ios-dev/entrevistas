import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useVacantes() {
    const vacantes = ref([]);
    const router = useRouter();
    const errors = ref('');

    const getVacantes = async() => {
        let response = await axios.get('/api/vacantes');
        vacantes.value = response.data.data;
    }

    const storeVacante = async(data) => {
        errors.value = '';
        try {
            await axios.post('/api/vacantes/', data);
            await router.push({name: 'vacantes.index'});
        } catch(e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
        
    }

    const destroyVacante = async(id) => {
        await axios.delete('/api/vacantes/' + id);
    }

    return {
        vacantes,
        getVacantes,
        errors,
        storeVacante,
        destroyVacante
    }
}