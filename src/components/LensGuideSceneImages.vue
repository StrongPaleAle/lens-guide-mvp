<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/ProductStore';
import LensGuideImageRange from '@/components/LensGuideImageRange.vue';
import IconDrag from '@/components/icons/IconDrag.vue';
const props = defineProps({
    lensModelValue: {
        type: String,
        required: true
    }
})
const productStore = useProductStore()

const selectedLensImage = computed(() => {
    return productStore.selectedScene?.sceneImages[props.lensModelValue]
})
const lensRangeValue = ref(50)
</script>
<template>
    <div class="LensGuide__scene-images"   :style="`--offset: ${lensRangeValue}%`">
        <img class="LensGuide__image" :src="productStore.selectedScene?.nakedEyeImage.responsiveImage.src" alt="">
        <div class="LensGuide__image__lens-container LensGuide__image__lens-container">
            <img class="LensGuide__image LensGuide__image__lens" :src="selectedLensImage.image.responsiveImage.src" alt="">
            
        </div>
        <div class="LensGuide__image__shade"></div>
        <LensGuideImageRange :lensRangeValue="lensRangeValue" @update:lensRangeValue="lensRangeValue = $event" />
        <span class="LensGuide__scene-images__indicator">
            <IconDrag />
        </span>
    </div>
</template>
<style scoped>
.LensGuide{
    
    &__scene-images{
        @apply
            h-full
            relative;
        &__indicator{
            transform: translate(calc(var(--offset)), -50%);
            @apply
                absolute
                pointer-events-none
                top-1/2
                -left-1/2
                right-1/2
                grid
                place-items-center;     
        }
    }
    &__image{
        @apply
            absolute
            inset-0
            w-full
            h-full
            object-cover;
        &__lens-container{
            
            @apply
                absolute
                inset-0
                w-full
                h-full
                overflow-hidden;
            transform: translateX(calc(var(--offset)));
        }
        &__lens{
            transform: translateX(calc(-1 * var(--offset)));
        }
        &__shade{
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.28) 66.92%);
            @apply
                absolute
                bottom-0
                w-full
                h-32;
        }
    }
    
}
</style>