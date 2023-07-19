<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/header/Header.vue'
</script>

<template>
  <Header />
  <RouterView class="router-view"/>
</template>

<style scoped>
  .router-view {
    height: calc(100% - 100px);
  }
</style>
