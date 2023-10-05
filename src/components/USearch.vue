<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import { useCounterStore } from '../stores/'

const emit = defineEmits(['search-updated'])
const store = useCounterStore()

const searchInput = ref(null)
const allItems = ref([])
const filteredItems = ref({})

onMounted(() => {
  searchInput.value?.focus()
})

const fetchDataIfNeeded = async (inputValue) => {
  if (inputValue.length >= 3) {
    await store.getDataFromApi('animal').then(() => {
      const storeData = store.getPosts
      allItems.value = storeData.result
    })
  }
}

const handleInput = async () => {
  const inputValue = searchInput.value?.value || ''

  await fetchDataIfNeeded(inputValue)

  const filteredData = {}

  for (const key in allItems.value) {
    const item = allItems.value[key]

    if (item.value && item.value.includes(inputValue)) {
      filteredData[key] = item
    }
  }

  filteredItems.value = filteredData
  emit('search-updated', filteredItems.value)
}
</script>

<template>
  <div class="max-w-2xl mx-auto my-20">
    <div
      class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
    >
      <div class="grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        ref="searchInput"
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Some Value"
        autofocus
        @input="handleInput"
      />
    </div>
    <p class="text-center text-xl mt-6">Found jokes: {{ Object.keys(filteredItems).length }}</p>
  </div>
</template>
