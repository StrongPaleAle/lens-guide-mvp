<script setup lang="ts">
import { ref, computed} from 'vue'
import { useProductStore } from '@/stores/ProductStore';

import LensGuideScenePicker from '@/components/LensGuideScenePicker.vue';
import LensGuideSceneImages from '@/components/LensGuideSceneImages.vue';
import BaseColourSwatch from '@/components/BaseColourSwatch.vue'

const productStore = useProductStore()



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
const SlicedSceneLenses = computed(() => {
    return ProductSceneLenses.value.slice(0,8)
})
const lensModelValue = ref(SlicedSceneLenses.value[0].sku)


</script>
<template>
  <div class="LensGuide__modal">
    <div class="LensGuide__modal-body">
        
        <!-- <select v-model="lensModelValue" name="lensSelect">
            <option 
                v-for="lens in ProductSceneLenses" 
                :key="lens.sku" 
                :value="lens.sku"
            >
                {{ lens.name }}
            </option>
        </select> -->
        <BaseColourSwatch  
            :inputGroup="SlicedSceneLenses" 
            :modelValue="lensModelValue"
            @update:model-value="lensModelValue = $event"
        />
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
            px-6
            py-12
            lg:basis-2/5;
        select{
            @apply
                px-2
                py-1.5
                border
                border-black
                rounded-md
                form-select;
        }
    }
    &__scene{
        @apply
            lg:basis-3/5
            h-full;

        &-container{
            @apply
                h-full
                relative;
        }
    }
}
</style>