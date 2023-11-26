<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/ProductStore';
import LensGuideImageRange from './LensGuideImageRange.vue';
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
    <div class="LensGuide__scene-images">
        <div class="absolute -left-20">{{ lensRangeValue }}</div>
        <img class="LensGuide__image" :src="productStore.selectedScene?.nakedEyeImage.responsiveImage.src" alt="">
        <div class="LensGuide__image__lens-container LensGuide__image__lens-container"  :style="`--offset: ${lensRangeValue}%`">
            <img class="LensGuide__image LensGuide__image__lens" :src="selectedLensImage.image.responsiveImage.src" alt="">
        </div>
        <LensGuideImageRange :lensRangeValue="lensRangeValue" @update:lensRangeValue="lensRangeValue = $event" />
        
    </div>
</template>
<style scoped>
.LensGuide{
    &__scene-images{
        @apply
            h-full
            relative;

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
    }
    &__range{
        @apply
            absolute
            bottom-0
            left-0
            w-full
            h-full;
        
    }
}
</style>