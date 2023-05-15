<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <h1 class="text-4xl font-extrabold">Programar Entrevista</h1>
        <br>
        <div v-if="errors">
            <div v-for="(v, k) in errors" :key="k"
                class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div>

        <form @submit.prevent="saveEntrevista()">
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <label for="countries"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selecciona
                        el area</label>
                    <select v-model="entrevista.vacante" class="form-control" id="docente">
                        <option v-for="v in vacantes" :value="v.id">{{ v.area }}</option>
                    </select>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label for="countries"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selecciona
                        el prospecto</label>
                    <select v-model="entrevista.prospecto" class="form-control" id="docente">
                        <option v-for="v in prospectos" :value="v.id">{{ v.nombre }}</option>
                    </select>
                </div>
            </div>
            <br>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="">
                    <label class="font-medium absolute text-sm text-gray-500  -translate-y-4 scale-80 ">
                        Fecha de entrevista
                    </label>
                    <input type="date" v-model="entrevista.fecha_entrevista" />
                </div>
            </div>
            <br>
            <div class="relative z-0 w-full mb-6 group">
                <textarea v-model="entrevista.notas" type="text" name="floating_last_name" id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required></textarea>
                <label for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Notas
                </label>
            </div>
            <br>
            <div class="relative z-0 w-full mb-6 group">
                <div class="flex items-center h-5">
                            <input v-model="form.reclutado" :true-value="1" :false-value="0" id="hs-table-checkbox-1"
                                type="checkbox" 
                                class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                                <label for="countries"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Recltado</label>
                        </div>
            </div>
            <button type="submit"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Guardar
            </button>
        </form>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import useEntrevistas from '../../composables/entrevistas';
import { ref } from 'vue'

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { errors, storeEntrevista, vacantes, getVacantes, prospectos, getProspectos, entrevista, getEntrevista, updateEntrevista } = useEntrevistas()
        const form = reactive({
            'vacante': '',
            'prospecto': '',
            'fecha_entrevista': Date(),
            'notas': "",
            'reclutado': '0'
        })
        const saveEntrevista = async () => {
            await updateEntrevista(props.id)
        }

        onMounted(getProspectos(), getVacantes(), getEntrevista(props.id))

        return {
            form,
            errors,
            saveEntrevista,
            vacantes,
            prospectos,
            selected: '',
            entrevista
        }
    },
    methods: {
        isNumber: function (evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        }
    }
}
</script>