<template>
  <main>
    <section class="sidebar">
      <div class="logo-area">
        <img src="src/assets/img/png/wallet.png" />
        <h1 class="title">FinanSer</h1>
      </div>
      <section class="links">
        <div v-for="link in sidebarLinks" class="link-area">
          <img :src="link.icon" />
          <label>{{ link.title }}</label>
        </div>
      </section>
    </section>
    <section class="content">
      <Header />
      <RouterView class="router-view"/>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/header/Header.vue'

import { ref } from 'vue'

let sidebarLinks = ref([
  {
    title: 'cateiras',
    icon: 'src/assets/img/png/wallet.png',
    isActive: false
  }
])
</script>

<style scoped>
  .router-view {
    height: calc(100% - 100px);
  }

  main {
    width: 100%;
    height: 100vh;
    display: flex;
  }

  section.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 100vh;
    padding-top: 30px;
    border-right: 0.1px solid #0000001a;
  }

  section.content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  div.logo-area {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.logo-area img {
    width: 30px;
    height: 30px;
  }

  h1.title {
    font-family: 'Ysabeau Office', sans-serif;
    font-weight: bold;
    font-size: 40px;
    color: #000;
    margin-left: 10px;
  }

  section.links {
    width: 100%;
    margin-top: 100px;
    align-items: center;
    background-color: red;
  }

  div.link-area {
    display: flex;
    align-items: center;
  }

  div.link-area img {
    width: 25px;
  }

  div.link-area label {
    font-size: 20px;
    margin-left: 20px;
  }
</style>
