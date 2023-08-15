<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    background-color: #00000028;
    z-index: 2;
  }
</style>