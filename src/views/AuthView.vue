<template>
  <main>
    <section class="auth">
      <div class="logo-area">
        <img src="src/assets/img/png/wallet.png" />
        <h1 class="title">FinanSer</h1>
      </div>
      <div class="auth-form">
        <h2>BEM VINDO</h2>
        <label class="subtitle">Organize sua vida financeira aqui.</label>
        <input id="toogle" class="toogle" type="checkbox" v-model="isSignup" />
        <label for="toogle" class="toogle-custom">
          <label class="option">login</label>
          <label class="option">cadastrar</label>
        </label>
        <div class="auth-input" v-if="isSignup">
          <div class="icon-area">
            <img src="src/assets/img/png/mail-inbox-app.png" />
          </div>
          <input class="input-custom" type="text" placeholder="nome de usuário" />
        </div>
        <div class="auth-input">
          <div class="icon-area">
            <img src="src/assets/img/png/mail-inbox-app.png" />
          </div>
          <input class="input-custom" type="email" placeholder="email" />
        </div>
        <div class="auth-input">
          <div class="icon-area">
            <img src="src/assets/img/png/hide.png" />
          </div>
          <input class="input-custom" type="password" placeholder="senha" />
        </div>
        <div class="auth-input" v-if="isSignup">
          <div class="icon-area">
            <img src="src/assets/img/png/hide.png" />
          </div>
          <input class="input-custom" type="password" placeholder="confirmar senha" />
        </div>
        <button class="btn-main">entrar</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'

  let isSignup = ref(false)
  
  watch(isSignup, (value: boolean) => {
    console.log('value => ', value)
  })
</script>

<style scoped>
  main {
    display: flex;
    width: 100%;
    height: 100%;
  }

  section.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  div.logo-area {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }

  div.logo-area img {
    width: 40px;
    height: 40px;
  }

  div.auth-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 390px;
    height: auto;
  }

  div.auth-input {
    display: flex;
    align-items: center;
    border-radius: 15px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    margin: 10px 0;
    border: 1px solid #0000002e;
  }

  div.icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 60%;
    border-right: 1px solid #0000002e;
  }

  div.icon-area img {
    width: 18px;
    height: 18px;
  }

  input.input-custom {
    height: 100%;
    width: 100%;
    border: 0;
    font-weight: bold;
    font-size: 14px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 10px;
    outline: 0;
  }

  button.btn-main {
    width: 100%;
    height: 60px;
    border-radius: 15px;
    border: 0;
    color: #fff;
    font-weight: bold;
    background-color: #0c37d1;
    cursor: pointer;
    transition: all ease .2s;
    margin-top: 10px;
  }

  button.btn-main:hover {
    filter: brightness(0.8);
  }

  h1.title {
    font-family: 'Ysabeau Office', sans-serif;
    font-weight: bold;
    font-size: 35px;
    color: #000;
    margin-left: 10px;
    margin-right: 20px;
  }

  h2 {
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }

  label.subtitle {
    color: #000000c0 !important;
  }

  input.toogle {
    display: none;
  }

  label.toogle-custom {
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    margin-top: 15px;
    border: 1px solid #00000010;
  }

  label.toogle-custom::before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    content: 'login';
    width: 50%;
    height: 100%;
    cursor: pointer;
    border-radius: 15px;
    background-color: #e9e9e9bd;
    transition: all ease .2s;
    left: 0;
    z-index: 2;
  }

  .toogle:checked + label.toogle-custom::before {
    left: calc(50%);
    content: 'cadastrar';
    z-index: 2;
  }

  label.option {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
  }
</style>
