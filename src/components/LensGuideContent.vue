<script setup lang="ts">
import { ref, computed} from 'vue'
import { useProductStore } from '@/stores/ProductStore';

import LensGuideScenePicker from '@/components/LensGuideScenePicker.vue';
import LensGuideSceneImages from '@/components/LensGuideSceneImages.vue';

const productStore = useProductStore()

const lensModelValue = ref(Object.keys(productStore.selectedScene?.sceneImages)[0])

const ProductSceneLenses = computed(() => {
    const lenses = []
    for (const option of productStore.productLenses.options) {
        if (productStore.selectedScene?.sceneImages[option.sku]){
             lenses.push({
                name: option.name,
                sku: option.sku
                
            })
        }
        
    }
    return lenses
})

// function lesnsesNameBySku(sku: string) { 
//     return ProductSceneLenses.value.find(lens => lens.sku === sku)?.name
    
// }

</script>
<template>
  <div class="LensGuide__modal">
    <div class="LensGuide__modal-body">
        
        <select v-model="lensModelValue" name="lensSelect">
            <option 
                v-for="lens in ProductSceneLenses" 
                :key="lens.sku" 
                :value="lens.sku"
            >
                {{ lens.name }}
            </option>
        </select>
    </div>
    <div class="LensGuide__scene">
        <div class="LensGuide__scene-container">
            <LensGuideSceneImages :lensModelValue="lensModelValue" />
            <LensGuideScenePicker 
                :scenes="productStore.productScenes" 
                v-model="productStore.selectedSceneName"
                @update:model-value="productStore.updateSelectedScene($event)"
            />
        </div>
    </div>
</div>
</template>
<style scoped>
.LensGuide{
    &__modal{
        
        @apply
            h-full
            overflow-hidden
            flex
            flex-col-reverse
            lg:flex-row
            
    }
    &__modal-body{
        @apply
            lg:basis-2/5
    }
    &__scene{
        @apply
            lg:basis-3/5;
        &-container{
            @apply
                h-full
                relative;
        }
    }
}
</style>