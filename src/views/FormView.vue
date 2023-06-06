<template>
    <form method="post">
        <div>
            <label for="nombre" style="margin-right: 10px">Nombre:</label>
            <input type="text" id="nombre" name="nombre" v-model="libro.nombre">
        </div>
        <div>
            <label for="autor" style="margin-right: 10px">Autor:</label>
            <input type="text" id="autor" name="autor" v-model="libro.autor">
        </div>
        <div>
            <label for="isbn" style="margin-right: 10px">isbn:</label>
            <input type="text" id="isbn" name="isbn" v-model="libro.isbn">
        </div>
        <div>
            <label for="lenguaje" style="margin-right: 10px">lenguaje:</label>
            <input type="text" id="lenguaje" name="lenguaje" v-model="libro.lenguaje">
        </div>
        <div>
            <label for="pages" style="margin-right: 10px">Paginas:</label>
            <input type="number" id="pages" name="pages" v-model="libro.pages">
        </div>
        <p>
            {{ libro.nombre }}
        </p>
        <button type="button" @click="create">Crear</button>
    </form>
</template>

<script lang="ts">

import axios from 'axios';

export default {
    name: "FormView",
    data() {
        return {
            libro: {
                isbn: null,
                nombre: null,
                autor: null,
                lenguaje: null,
                pages: null
            }
        }
    },
    // computed: {
    //     total() {
    //         return this.libro.cantidad * this.libro.precio
    //     }
    // },
    methods: {
        create() {
            axios.post('/api/books', this.libro)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        console.log("montado")
    },
    unmounted() {
        console.log("desmontado")
    },
    // watch: {
    //     'libro.nombre': function (newVal, oldVal) {
    //         console.log(oldVal, newVal)
    //         this.libro.precio = Math.floor(Math.random() * 100000);
    //     },
    // }
}
</script>

<style scoped>

</style>