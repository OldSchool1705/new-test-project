<template>
  <div class="container mx-auto px-4 mt-20">
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">id</th>
            <th scope="col" class="px-6 py-3">value</th>
            <th scope="col" class="px-6 py-3">url</th>
            <th scope="col" class="px-6 py-3">icon_url</th>
            <th scope="col" class="px-6 py-3">created_at</th>
            <th scope="col" class="px-6 py-3">updated_at</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{store.selectedItem.id}}
            </th>
            <td class="px-6 py-4 dark:text-white">{{store.selectedItem.value}}</td>
            <td class="px-6 py-4 dark:text-white">{{store.selectedItem.url}}</td>
            <td class="px-6 py-4 dark:text-white">{{store.selectedItem.icon_url}}</td>
            <td class="px-6 py-4 dark:text-white">{{store.selectedItem.created_at}}</td>
            <td class="px-6 py-4 dark:text-white">{{store.selectedItem.updated_at}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/index.js'

const store = useCounterStore()
store.selectedItem
</script>
