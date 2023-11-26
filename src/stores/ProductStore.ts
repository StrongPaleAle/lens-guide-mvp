import { defineStore } from 'pinia'
import axios from 'axios'
import type {  Product, ProductPart, ProductPartOption, ProductScene } from '@/stores/types'


export const useProductStore = defineStore('ProductStore', {
    state: () => {
      return {
        product: {} as Product,
        productLenses: {} as ProductPart,
        productScenes: [] as ProductScene[],
        selectedScene: {} as ProductScene,
        selectedSceneName: '',
      }
    },
    actions: {
        async fetchScenes() {
          const data = (await axios.get('https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json')).data
          this.productScenes = data;
          this.selectedScene = data[0];
          this.selectedSceneName = data[0].sceneName;
        },
        async fetchProduct() {
            const data = (await axios.get('https://www.sungod.co/products/9150/renegades?pdp=1')).data
            const [product] = Object.keys(data)
            this.product = data[product];
            this.productLenses = this.product.parts.find((part: ProductPart) => part.name === 'Lenses') as ProductPart;
        },
        updateSelectedScene(sceneName: string) {
          this.selectedScene = this.productScenes.find((scene: ProductScene) => scene.sceneName === sceneName) as ProductScene;
          this.selectedSceneName = sceneName;
        }
    },
    getters: {
      lensBySku: (state) => (sku: string) => state.productLenses.options.find((lens: ProductPartOption) => lens.sku === sku),
      
    }
})