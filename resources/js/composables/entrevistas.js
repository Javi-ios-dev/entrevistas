import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useEntrevistas() {
    const entrevista = ref([]);
    const entrevistas = ref([]);
    const errors = ref('');
    const router = useRouter();

    const vacantes = ref([]);
    const prospectos = ref([]);

    const getEntrevista = async (id) => {
        let response = await axios.get('/api/entrevistas/' + id);
        entrevista.value = response.data.data;
    }

    
    const getEntrevistas = async () => {
        let response = await axios.get('/api/entrevistas');
        entrevistas.value = response.data;
    }
    
    const getVacantes = async () => {
        let response = await axios.get('/api/vacantes');
        vacantes.value = response.data.data;
        console.log(vacantes);
    }

    const getProspectos = async () => {
        let response = await axios.get('/api/prospectos');
        prospectos.value = response.data.data;
    }

    const storeEntrevista = async (data) => {
        errors.value = '';
        try {
            // let date = new Date(data.fecha_registro).toISOString().split('T')[0];
            // data.fecha_registro = date;
            await axios.post('/api/entrevistas/', data);
            await router.push({ name: 'entrevistas.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateEntrevista = async (id) => {
        errors.value = '';
        try {
            await axios.put('/api/entrevistas/' + id, entrevista.value);
            await router.push({ name: 'entrevistas.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyEntrevista = async (id) => {
        await axios.delete('/api/entrevistas/' + id);
    }

    return {
        entrevista,
        entrevistas,
        errors,
        getEntrevista,
        getEntrevistas,
        storeEntrevista,
        updateEntrevista,
        destroyEntrevista,
        getVacantes,
        vacantes,
        prospectos,
        getProspectos
    }
}