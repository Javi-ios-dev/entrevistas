<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <h1 class="text-4xl font-extrabold">Nueva Vacante</h1>
        <br>
        <div v-if="errors">
            <div v-for="(v, k) in errors" :key="k"
                class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div>
        <form @submit.prevent="saveVacante()">
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <label for="countries"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selecciona
                        el area</label>
                    <v-select placeholder="Area" label="Area" v-model="vacante.area"
                        :options="['Sistemas', 'Recursos Humanos', 'Administración', 'Ventas', 'Contabilidad']"
                        class="style-chooser">
                        <template #search="{ attributes, events }">
                            <input class="vs__search" :required="!vacante.area" v-bind="attributes" v-on="events" />
                        </template>
                    </v-select>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="vacante.sueldo" type="text" name="floating_last_name" id="floating_last_name"
                        @keypress="isNumber($event)"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_last_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Sueldo
                    </label>
                </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="">
                    <input min="0" max="1" v-model="vacante.activo" type="number" name="activo" id="activo"
                        @keypress="isNumber($event)"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_phone"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Activo
                    </label>
                </div>
            </div>
            <br>
            <button type="submit"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Guardar
            </button>
        </form>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import useVacantes from "../../composables/vacantes"

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { errors, getVacante, vacante, updateVacante } = useVacantes()
        const saveVacante = async () => {
            await updateVacante(props.id)
        }

        onMounted(getVacante(props.id))
        return {
            vacante,
            errors,
            saveVacante,
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
    },
}
</script>