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
        <button class="btn-main">entrar</button>
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
    height: 400px;
  }

  div.auth-input {
    display: flex;
    align-items: center;
    border-radius: 10px;
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
    height: 80%;
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
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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
</style>
