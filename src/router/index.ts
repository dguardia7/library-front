import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import FormView from '../views/FormView.vue'
import CartView from '../views/CartView.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Inicio',
        component: HomeView
    },
    {
        path: '/libros',
        name: 'Libros',
        component: BookView
    },
    {
        path: '/carrito',
        name: 'Carrito',
        component: CartView
    },
    {
        path: '/crear',
        name: 'Creación',
        component: FormView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router