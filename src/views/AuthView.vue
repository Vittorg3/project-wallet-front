<template>
  <main>
    <section class="auth">
      <div class="auth-form">
        <div class="auth-input">
          <div class="icon-area">
            
          </div>
        </div>
        <div class="auth-input">
          <div class="icon-area">
            
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
  main {
    display: flex;
    width: 100%;
    height: 100%;
  }

  section.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  div.auth-form {
    width: 400px;
    height: 400px;
  }

  div.auth-input {
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 90%;
    height: 60px;
    margin: 0 auto;
    margin: 20px 0;
    border: 1px solid #0000002e;
  }

  div.icon-area {
    width: 70px;
    height: 80%;
    border-right: 1px solid #0000002e;
  }
</style>
