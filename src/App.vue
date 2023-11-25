<script setup lang="ts">
import LensGuide from '@/components/LensGuide.vue';

</script>

<template>

  <main class="MainContainer">
    <LensGuide />
  </main>
</template>

<style>
.MainContainer {
  
  @apply 
    w-full 
    min-h-screen 
    grid
    place-content-center;
}
</style>
