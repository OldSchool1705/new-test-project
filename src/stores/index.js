import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const getPosts = ref([])
  const selectedItem = ref([])


  async function getDataFromApi(category) {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${category}`)

    if (response.ok) {
      const json = await response.json()
      getPosts.value = json
    } else {
      console.log(`Ошибка HTTP: ${response.status}`)
    }
  }

  function setSelectedItem(item) {
    selectedItem.value = item
  }
  return { getDataFromApi, getPosts, setSelectedItem, selectedItem }
})
