<script setup >
import { ref, onMounted } from 'vue'
import USearch from './USearch.vue'
import { useCounterStore } from '../stores/index.js'
import { formatDate } from '../formatDate/index'

const items = ref()
const store = useCounterStore()

const handleSearchUpdated = onMounted((e) => {
  if (e !== undefined) {
    items.value = e
  }
})

const getSetSelectedItem = (item) => {
  store.setSelectedItem(item) 
}
</script>

<template>
  <div class="container mx-auto px-4 pb-20">
    <USearch @search-updated="handleSearchUpdated" />
    <div v-if="items === undefined" class="mt-2 text-gray-500">
      <h3 class="text-4xl text-center">No results found.</h3>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-wrap lg:flex-nowrap">
      <router-link
        v-for="(item, index) in items"
        :key="item.id"
        :to="{ name: 'itemPage', params: { id: index + 1 } }"
        class="p-5 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md break-words cursor-pointer"
        :class="index < 2 ? 'lg:col-span-2 h-auto mb-6' : 'col-span-1 h-auto mt-6'"
        @click="getSetSelectedItem(item)"
      >
        <div class="flex flex-col justify-between h-[100%]">
          <h3 class="text-sm lg:text-lg">
            {{ item.value }}
          </h3>
          <div class="md:flex justify-between items-end mt-5 w-full text-center">
            <p class="text-[12px] word-break-break-all word-wrap-break-word mb-2 md:mb-0">
              {{ item.id }}
            </p>
            <p class="text-[12px]">{{ formatDate(item.updated_at) }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
