<template>
  <main>
    <div class="logo-area">
      <img src="src/assets/img/png/wallet.png" />
      <h1 class="title">FinanSer</h1>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
  main {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0 40px;
  }

  div.logo-area {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.logo-area img {
    width: 20px;
    height: 20px;
  }

  h1.title {
    font-family: 'Ysabeau Office', sans-serif;
    font-weight: bold;
    font-size: 30px;
    color: #000;
    margin-left: 10px;
  }
</style>