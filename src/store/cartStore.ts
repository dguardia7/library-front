import { Book } from '../model/Book'

import { defineStore } from "pinia"
export const useCartStore = defineStore('cart', {
    state: () => ({ items: [] as Book[] }),
    actions: {
        addToCart(book: Book) {
            const previousBook = this.items.find(el => el.id === book.id)
            if (previousBook) {
                this.items = this.items.map(el => {
                    el.quantity = el.quantity ?? 0
                    el.quantity = el.quantity + 1
                    return el
                })
            } else{
                book.quantity = 1
                this.items.push(book)
            }
        },
        clearCart() :void {
            this.items = []
        }
    },
    persist: true,
})