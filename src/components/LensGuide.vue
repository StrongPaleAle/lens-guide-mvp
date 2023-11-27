<script setup lang="ts">

import BaseModal from '@/components/BaseModal.vue'
import LensGuideContent from '@/components/LensGuideContent.vue';
import { ref } from 'vue'
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore()
productStore.fetchScenes()
productStore.fetchProduct()

const showModal = ref(false)
</script>
<template>
    <button class="LensGuide__show-btn" @click="showModal = true">Lens Guide</button>
    <Teleport to="#app">
        <BaseModal :show="showModal" @close="showModal = false">
            <LensGuideContent />
        </BaseModal>
    </Teleport>
</template>
<style scoped>
.LensGuide{
    &__show-btn{
        @apply
            
            text-lg
            leading-tight
            pb-1.5
            border-b
            border-black
            border-opacity-30
            cursor-pointer;
    }
}
</style>
