<template>
  <div class="flex flex-col mx-auto">
    <h3 class="mx-auto p-6 text-lg">Este es el carrito: </h3>
    <button class="bg-library-secondary hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded" 
    @click="cartStore.clearCart">Limpiar carrito</button>
    <div class="grid sm:grid-cols-12 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      <CartCard v-for="book in cartStore.items" :book="book"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CartCard from '../components/CartCard.vue';
import { useCartStore } from '../store/cartStore';

const cartStore = useCartStore()


</script>

<style scoped>

</style>