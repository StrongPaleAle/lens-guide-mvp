<script setup lang="ts">
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="BaseModal">
    <div v-if="show" class="BaseModal">
      <div class="BaseModal__container">
        

        <div class="BaseModal__body">
          <slot></slot>
        </div>

        <button
              class="BaseModal__close-button"
              @click="$emit('close')"
            >Close</button>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.BaseModal {
  @apply 
    fixed 
    inset-0 
    z-50 
    flex 
    items-center 
    justify-center 
    bg-black 
    bg-opacity-80
    p-4;
    &__container{
      @apply 
          relative 
          w-full 
          max-w-screen-2xl
          mx-auto 
          overflow-hidden
          pt-12;
    }
    &__body{
        @apply 
            w-full
            bg-white 
            rounded-xlg
            mt-0.5;
            
    }
    &__close-button{
        @apply 
            absolute 
            top-0 
            right-0 
            p-0
            pb-1.5
            text-lg
            leading-tight	
            text-white 
            border-b
            border-white
            border-opacity-30
            focus:outline-none;
    }
    &-enter-active,
    &-leave-active {
        transition: opacity 0.5s ease;
    }

    &-leave-to, &-enter-from {
    opacity: 0;
    }

    &-enter-from,
    &-leave-to {
        .modal-container {
            transform: scale(1.1);
        }
    }
}
</style>
