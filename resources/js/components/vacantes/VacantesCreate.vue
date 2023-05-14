
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
                    <!-- <input v-model="form.area" type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> -->
                <!--           
          <label for="e" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Area
                    </label> -->
                    <label for="countries"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selecciona
                        el area</label>
                <!-- <Select2 v-model="form.area"
         :options="vacan" 
                     id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> -->
                <!-- <select v-model="form.area" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
           
            <option value="Sistemas" >Sistemas</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Administración">Administración</option>
            <option value="Ventas">Ventas</option>
            <option value="Contabilidad">Contabilidad</option>
                    </select> -->
                    <v-select placeholder="Area" label="Area" v-model="form.area"
                        :options="['Sistemas', 'Recursos Humanos', 'Administración', 'Ventas', 'Contabilidad']"
                        class="style-chooser">
                        <template #search="{ attributes, events }">
                            <input class="vs__search" :required="!form.area" v-bind="attributes" v-on="events" />
                        </template>
                    </v-select>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="form.sueldo" type="text" name="floating_last_name" id="floating_last_name"
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
                    <input min="0" max="1" v-model="form.activo" type="number" name="floating_phone" id="floating_phone"
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
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
        </form>

    </div>
</template>

<script>
import { reactive } from 'vue';
import useVacantes from "../../composables/vacantes"

export default {
    setup() {
        const form = reactive({
            'area': 'Sistemas',
            'sueldo': '',
            'activo': 0
        })

        const { errors, storeVacante } = useVacantes()

        const saveVacante = async () => {
            await storeVacante({ ...form })
        }

        return {
            form,
            errors,
            saveVacante,
        }
    }
}
</script>

<style scoped></style>