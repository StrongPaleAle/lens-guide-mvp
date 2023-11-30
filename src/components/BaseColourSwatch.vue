<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    inputGroup: {type: Object},
    modelValue: {type: String, required: true},
    title: {type: String, default: 'Colour Swatch'}
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
    <fieldset class="ColourSwatch" >
        <legend>{{ title }}</legend>
        
        <div class="ColourSwatch__input-group">
            <label class="ColourSwatch__input-element" v-for="input in inputGroup" :key="input.sku">
                <input type="radio" :name="title"
                    
                    :id="input.sku"
                    :value="input.sku"
                    v-model="model"
                >
                <span>
                    {{ input.name }}
                </span>
            </label>
        </div>
    </fieldset>
</template>
<style>
    .ColourSwatch{
        fieldset{
            @apply
                sr-only;
        }
    }
</style>