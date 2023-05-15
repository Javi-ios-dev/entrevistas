<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <h1 class="text-4xl font-extrabold">Entrevistas</h1>
        <div class="flex place-content-end mb-4">
            <div class="rounded-md bg-indigo-500 text-white mx-2">
                <router-link :to="{ name: 'entrevistas.create' }" class="mx-4 my-2" style="display: block;">
                    Programar Entrevista</router-link>

            </div>
        </div>
        <table class="border border-gray-100 dark:border-gray-600 w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vacante</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prospecto</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha de
                        entrevista</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notas</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reclutado</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in entrevistas" :key="item.id"
                    class="odd:bg-white even:bg-gray-100 hover:bg-indigo-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-indigo-500">
                    <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {{ item.area }}
                    </td>
                    <td class=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {{ item.nombre }}
                    </td>
                    <td class=" px-6  whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 py-3 pl-4">
                        <div class="flex items-center h-5">

                            <label for="hs-table-checkbox-1" class="">
                                {{ item.fecha_entrevista }}
                            </label>
                        </div>
                    </td>
                    <td class=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {{ item.notas }}
                    </td>
                    <td class=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <div class="flex items-center h-5">
                            <input v-model="item.reclutado" :true-value="1" :false-value="0" id="hs-table-checkbox-1"
                                type="checkbox" onclick="return false;"
                                class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                            <label for="hs-table-checkbox-1" class="sr-only">
                                {{ item.reclutado }}
                            </label>
                        </div>
                    </td>
                    <td class=" px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        
                        <router-link :to="{ name: 'entrevistas.edit', params: { id: item.id } }"
                            class="p-1 rounded-md bg-blue-500 font-medium text-white dark:text-white hover:bg-blue-700">
                            Editar
                        </router-link>
                        <button @click="deleteEntrevista(item.id)"
                            class="p-1 rounded-md bg-red-500 font-medium text-white dark:text-white hover:bg-red-700">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import useEntrevistas from '../../composables/entrevistas';
import { onMounted } from 'vue';

export default {
    setup() {
        const { entrevistas, getEntrevistas, destroyEntrevista } = useEntrevistas()
        const deleteEntrevista = async (id) => {
            if (!window.confirm('Estas seguro?')) {
                return;
            }
            await destroyEntrevista(id);
            await getEntrevistas();
        }

        onMounted(getEntrevistas)

        return {
            entrevistas,
            deleteEntrevista
        }
    }
}
</script>