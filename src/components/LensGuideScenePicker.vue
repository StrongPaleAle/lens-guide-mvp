<script setup lang="ts">
import { computed } from 'vue';
import type { ProductScene } from '@/stores/types';
import IconLandscape from '@/components/icons/IconLandscape.vue';
const props = defineProps({
    scenes: Array as () => ProductScene[],
    modelValue: String

})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
<template>
    <div class="LensGuide__scene-picker">
        <fieldset>
            <legend class="sr-only">Choose a scene</legend>
            <div class="LensGuide__scene-picker__grid">
                <label v-for="scene in scenes" :key="scene.sceneName" class="LensGuide__scene-picker__option">
                    <picture>
                        <source :srcset="scene.nakedEyeImage.responsiveImage.srcSet" type="image/jpeg">
                        <img :src="scene.nakedEyeImage.responsiveImage.src" :alt="scene.sceneName">
                    </picture>
                    <input type="radio" name="LensGuide__scene-picker" :id="scene.sceneName" :value="scene.sceneName" v-model="model">
                    <span class="active-indicator"><IconLandscape/></span>
                    <span class="sr-only">{{ scene.sceneName }}</span>
                    
                </label>
            </div>
            
        </fieldset>
    </div>
</template>
<style scoped>
.LensGuide{
    &__scene-picker{
        border-radius: 9px;
        @apply
            bg-white
            absolute
            p-1
            bottom-16
            left-1/2
            w-auto
            h-auto
            -translate-x-1/2;
        &__grid{
            @apply
                grid
                gap-1;
            grid-template-columns: repeat(auto-fill, 52px);
            grid-auto-flow: column;
        }
        &__option{
            width: 52px;
            height: 52px;
            @apply
                inline-block
                relative
                rounded-md
                overflow-hidden;
            img{
                @apply
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover;
            }
            .active-indicator{
                background: linear-gradient(73deg, #5C0F99 -1.94%, #3449B8 58.96%, #1799E1 102.64%);
                    @apply
                        absolute
                        inset-0
                        grid
                        place-items-center
                        text-white
                        opacity-0
                        transition-opacity
                        ease-in-out
                        duration-300;
            }
            & input[type="radio"]{
                @apply
                    sr-only;
                &:checked + .active-indicator{
                    @apply
                        opacity-70
                        transition-opacity
                        ease-in-out
                        duration-300;
                }
            }
        }
    }
}
</style>