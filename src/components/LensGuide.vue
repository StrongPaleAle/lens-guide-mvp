<script setup lang="ts">

import BaseModal from '@/components/BaseModal.vue'
import { ref } from 'vue'
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore()
productStore.fetchProduct()

const showModal = ref(false)
</script>
<template>
    <button class="LensGuide__show-btn" @click="showModal = true">Lens Guide</button>
    <Teleport to="#app">
        <BaseModal :show="showModal" @close="showModal = false">
            <div class="LensGuide__modal">
                <div class="LensGuide__modal-body">
                    <p v-for="lensOption in productStore.lensesOption" :key="lensOption.sku">
                        {{ lensOption.name }}
                    </p>
                </div>
            </div>
        </BaseModal>
    </Teleport>
</template>

