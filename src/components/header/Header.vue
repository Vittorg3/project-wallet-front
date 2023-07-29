<template>
  <main>
    <div class="input-custom">
      <div class="input-icon-area">
        <img src="src/assets/img/png/search.png" />
      </div>
      <input type="search" placeholder="o que está procurando?"/>
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
    height: 100px !important;
    padding: 0 40px;
  }

  div.input-custom {
    display: flex;
    width: 40%;
    height: 50%;
    min-height: 40px;
    border-radius: 30px;
    background-color: #c7d2e23a;
    cursor: pointer;
  }

  div.input-icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    min-width: 30px;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px; 
  }

  div.input-icon-area img {
    width: 25px;
  }

  div.input-custom input {
    width: 85%;
    outline: 0;
    border: 0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: transparent;
  }
</style>