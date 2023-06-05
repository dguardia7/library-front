<template>

  <div
      class="max-w-sm bg-library-secondary border border-gray-200 rounded-lg shadow dark:bg-library-secondary dark:border-gray-700 mx-3">
    <a href="#">
      <img class="rounded-t-lg" :src="book.url" alt=""/>
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ book.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ book.author?.name }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Cantidad: {{ book.quantity }}
      </p>
    </div>
  </div>

</template>

<script lang="ts">
import { Book } from '../model/Book'
import { useCartStore } from '../store/cartStore'

export default {
  name: "CartCard",
  props: {
    book: {
      type: Object as unknown as Book,
      required: true
    }
  },
  methods: {
    addBook(book: Book){
      const cartStore = useCartStore()
      cartStore.addToCart(book)
    }
  }
}
</script>

<style scoped>

</style>