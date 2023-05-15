import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useProspectos() {
    const prospecto = ref([]);
    const prospectos = ref([]);
    const errors = ref('');
    const router = useRouter();

    const getProspecto = async (id) => {
        let response = await axios.get('/api/prospectos/' + id);
        prospecto.value = response.data.data;
    }

    const getProspectos = async () => {
        let response = await axios.get('/api/prospectos');
        prospectos.value = response.data.data;
    }

    const storeProspecto = async (data) => {
        errors.value = '';
        try {
            // let date = new Date(data.fecha_registro).toISOString().split('T')[0];
            // data.fecha_registro = date;
            await axios.post('/api/prospectos/', data);
            await router.push({ name: 'prospectos.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateProspecto = async (id) => {
        errors.value = '';
        try {
            await axios.put('/api/prospectos/' + id, prospecto.value);
            await router.push({ name: 'prospectos.index' });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyProspecto = async (id) => {
        await axios.delete('/api/prospectos/' + id);
    }

    return {
        prospecto,
        prospectos,
        errors,
        getProspecto,
        getProspectos,
        storeProspecto,
        updateProspecto,
        destroyProspecto,
    }
}