<template>
  <main>
    <section class="sidebar">
      <div class="logo-area">
        <img src="src/assets/img/svg/wallet-icon.svg" />
        <h1 class="title">FinanSer</h1>
      </div>
      <section class="links">
        <router-link
          v-for="link in sidebarLinks"
          :key="link.id"
          :to="link.path"
          :class="['link-area', { active: link.isActive }]"
          @click="selectMenuItem(link.id)"
        >
          <img :src="link.icon" />
          <label>{{ link.title }}</label>
        </router-link>
      </section>
    </section>
    <section class="content">
      <Header />
      <RouterView class="router-view"/>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { RouterView, RouterLink, useRoute } from 'vue-router'
  import Header from '@/components/header/Header.vue'

  import { ref, onMounted, watchEffect } from 'vue'

  let currentRoute = useRoute()
  let currentPath = ref(currentRoute.path)

  let sidebarLinks = ref([
    {
      id: 1,
      title: 'Carteiras',
      icon: 'src/assets/img/png/money-bag.png',
      path: '/wallets',
      isActive: true
    },
    {
      id: 2,
      title: 'Analises',
      path: '/reports',
      icon: 'src/assets/img/png/file.png',
      isActive: false
    },
    {
      id: 3,
      title: 'Metas',
      path: '/goals',
      icon: 'src/assets/img/png/goals.png',
      isActive: false
    }
  ])

  function selectMenuItem(itemID: number) {
    sidebarLinks.value = sidebarLinks.value.map((link) => {
      return {
        ...link,
        isActive: link.id === itemID,
      };
    })
  }

  watchEffect(() => {
    currentPath.value = currentRoute.path;
    sidebarLinks.value = sidebarLinks.value.map((link) => {
      return {
        ...link,
        isActive: link.path === currentPath.value,
      };
    });
})

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
    width: 20%;
    height: 100vh;
    padding-top: 30px;
    border-right: 0.1px solid #00000010;
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
    margin-right: 27%;
  }

  div.logo-area img {
    width: 30px;
    height: 30px;
  }

  h1.title {
    font-family: 'Ysabeau Office', sans-serif;
    font-weight: bold;
    font-size: 30px;
    color: #000;
    margin-left: 10px;
  }

  section.links {
    width: 100%;
    margin-top: 100px;
    align-items: center;
    padding-left: 40px;
  }

  .link-area {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 90%;
    padding: 10px;
    border-radius: 15px;
    transition: all ease .2s;
    text-decoration: none;
  }

  .link-area:visited {
    color: inherit;
  }

  .link-area.active {
    background-color: #cbdcf067;
    scale: 1.1;
  }

  .link-area img {
    width: 35px;
  }

  .link-area label {
    font-size: 20px;
    margin-left: 20px;
    font-weight: 500;
    cursor: pointer;
  }
</style>
