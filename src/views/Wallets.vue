<template>
  <main>
    <section class="wallet-section">
      <div class="wallets-area">
        <!-- TODO: passar para um componente externo reutilizável -->
        <div class="wallet">
          <img src="src/assets/img/svg/card-icon.svg" />
          <div class="wallet-basic-info">
            <span>29/07/2023</span>
            <label>Saida nos finais de semana</label>
          </div>
          <div class="wallet-money-limit">
            <span>Disponível para gastar</span>
            <label>$77,48</label>
          </div>
        </div>
      </div>
      <div class="wallet-limit-bar-progress-area">
        <div class="wallet-limit-info">
          <span>Limite utilizado</span>
          <span>$1.722.52/1.800</span>
        </div>
        <div class="limit-bar-progress">
          <div class="progress"></div>
        </div>
      </div>
      <div class="transactions">
        <h1>Transações</h1>
      </div>
    </section>
    <section class="quick-start-section">

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

  section.wallet-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  div.wallets-area {
    display: flex;
    align-items: center;
    padding-left: 30px;
    width: 100%;
    height: 300px;
  }

  div.wallet {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80%;
    height: 90%;
    border-radius: 30px;
    cursor: pointer;
    left: 0;
    background: rgb(6,1,11);
    background: conic-gradient(from 10.77deg at 62.1% 61.73%, #7B1B9C 0deg, #3B146A 0.04deg, #0B0708 360deg);
    transition: all ease .2s;
  }

  div.wallet:hover {
    scale: 1.1;
    left: 20px;
  }

  div.wallet img {
    position: absolute;
    left: 20px;
    top: 15px;
    width: 30px;
  }

  div.wallet-basic-info {
    position: absolute;
    top: 60px;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    color: #ffffffbe;
    font-size: 12px;
  }

  label {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  div.wallet-money-limit {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.wallet-money-limit span {
    line-height: 15px;
    color: #fff;
  }

  div.wallet-limit-bar-progress-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
  }

  div.wallet-limit-info {
    display: flex;
    justify-content: space-between;
    width: 82%;
    padding: 0 0 0 6%;
  }

  div.wallet-limit-info span {
    color: #000;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 5px;
  }

  div.limit-bar-progress {
    width: 76.5%;
    height: 10px;
    margin-left: 40px;
    border-radius: 20px;
    background-color: #eaeaf5a2;
  }

  div.progress {
    width: 70%;
    height: 100%;
    border-radius: 20px;
    background-color: #383ee4a2;
  }

  div.transactions {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    margin-top: 30px;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-left: 40px;
  }
</style>