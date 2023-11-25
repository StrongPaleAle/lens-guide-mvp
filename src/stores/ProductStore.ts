import { defineStore } from 'pinia'
import axios from 'axios'
import type {  Product, ProductPart } from '@/stores/types'





export const useProductStore = defineStore('ProductStore', {
    state: () => {
      return {
        product: {} as Product,
        productScenes: []
      }
    },
    actions: {
        async fetchProduct() {
            const data = (await axios.get('https://www.sungod.co/products/9150/renegades?pdp=1')).data
            const [product] = Object.keys(data)
            this.product = data[product];
        }
    },
    getters: {
      lensesOption: (state) => state.product.parts.filter((part: ProductPart) => part.name === 'Lenses')[0].options,
        
      
    }
})