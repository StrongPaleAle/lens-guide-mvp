<script setup lang="ts">
const props = defineProps({
    lensRangeValue: {
        type: Number,
        required: true
    }
})
const handleInputChange = (event: Event) => {
    
    return (event.target as HTMLInputElement).value
}
</script>
<template>
    <input 
        type="range" 
        min="0" 
        max="100"  
        :value="lensRangeValue" 
        @input="$emit('update:lensRangeValue', handleInputChange($event))" 
        class="LensGuide__range">
</template>