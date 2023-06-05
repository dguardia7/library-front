<template>
    <form method="post">
        <div>
            <label for="nombre" style="margin-right: 10px">Nombre:</label>
            <input type="text" id="nombre" name="nombre" v-model="libro.nombre">
        </div>
        <div>
            <label for="precio" style="margin-right: 10px">Precio:</label>
            <input type="number" id="precio" name="precio" v-model="libro.precio" readonly>
        </div>
        <div>
            <label for="cantidad" style="margin-right: 10px">Cantidad:</label>
            <input type="number" id="cantidad" name="cantidad" v-model="libro.cantidad">
        </div>
        <p>
            {{ libro.nombre }}
        </p>
        <p>
            Total: ${{ total }}
        </p>
        <button type="button" @click="create">Crear</button>
    </form>
</template>

<script lang="ts">

export default {
    name: "FormView",
    data() {
        return {
            libro: {
                cantidad: 0,
                nombre: null,
                precio: 0,
            }
        }
    },
    computed: {
        total() {
            return this.libro.cantidad * this.libro.precio
        }
    },
    methods: {
        create() {
            alert("El libro: " + this.libro.nombre + " ha sido creado")
        }
    },
    mounted() {
        console.log("montado")
    },
    unmounted() {
        console.log("desmontado")
    },
    watch: {
        'libro.nombre': function (newVal, oldVal) {
            console.log(oldVal, newVal)
            this.libro.precio = Math.floor(Math.random() * 100000);
        },
    }
}
</script>

<style scoped>

</style>