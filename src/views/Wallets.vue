<template>
  <main>
    <section class="wallet-section">
      <div class="wallets-area">
        <!-- TODO: passar para um componente externo reutilizável -->
        <div class="wallet" @click="modalSwitch(true)">
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
        <div class="transactions-scroll-area">
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-down-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Blusa Social | Riachuelo</label>
              <span>11/07/2023, 10:20</span>
            </div>
            <div class="transaction-value-area">
              <span class="negative">-$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
          <div class="transaction-single">
            <div class="transaction-type-icon">
              <img src="src/assets/img/svg/arrow-up-icon.svg" />
            </div>
            <div class="transaction-info-area">
              <label>Pix | Dayana</label>
              <span>29/07/2023, 12:15</span>
            </div>
            <div class="transaction-value-area">
              <span class="positive">$140,00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="quick-start-section">
      <div class="shortcut-section">
        <h1>Ações</h1>
        <div class="container">
          <div class="button-quick-action">
            <label>pagar</label>
          </div>
          <div class="button-quick-action">
            <label>adicionar</label>
          </div>
        </div>
      </div>
    </section>
    <modal v-show="showModal">
      <div class="modal-content">
        <div class="modal-header">
          <img @click="modalSwitch(false)" src="src/assets/img/svg/close-icon.svg" />
        </div>
        <div class="modal-form">
          <h3>Titulo da Carteira</h3>
          <input class="input-custom" type="text" />
          <h3>Valor</h3>
          <input class="input-custom" type="text" />
          <button class="btn-modal-primary">salvar</button>
          <button class="btn-modal-secondary">transferir quantia</button>
        </div>
      </div>
    </modal>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const showModal = ref(false)

  function modalSwitch(value: boolean) {
    showModal.value = value
  }
</script>

<style scoped>
  div.modal-content {
    display: flex;
    flex-direction: column;
    padding: 15px;
    min-width: 400px;
    min-height: 400px;
    border-radius: 15px;
    background-color: white;
  }

  div.modal-header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 30px;
  }

  div.modal-header img {
    width: 30px;
    cursor: pointer;
  }

  div.modal-form {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  div.modal-form h3 {
    font-weight: 500;
    padding-top: 5px;
    color: #000;
}

  div.modal-form .input-custom {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    outline: 0;
    border: 0.5px solid #00000018;
    background-color: #d9d9d934;
    padding-left: 10px;
    margin-top: 5px;
  }

  div.modal-form .input-custom:nth-of-type(2) {
    width: 30%;
  }

  button.btn-modal-primary, .btn-modal-secondary {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    outline: 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    background-color: #9878F5;
  }

  button.btn-modal-secondary {
    border: 1px solid #9878F5;
    color: #000 !important;
    background-color: #fff;
  }
  
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
    min-height: 300px;
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
    color: #000 !important;
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
    align-items: flex-start;
    width: 83%;
    height: 100%;
    margin-top: 30px;
    padding-left: 0px;
    margin-right: 18%;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-left: 40px;
    color: #000;
  }

  div.transactions-scroll-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    overflow-x: auto;
  }

  div.transactions-scroll-area::-webkit-scrollbar {
    width: 8px;
    border-radius: 20px;
    background-color: rgb(245, 244, 244);
  }

  div.transactions-scroll-area::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #00000010;
  }
  
  div.transaction-single {
    display: flex;
    align-items: center;
    width: 90%;
    height: 70px;
    min-height: 70px;
    margin-left: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    background-color: #fcfcfc;
    cursor: pointer;
    border-bottom: 0.5px solid #00000021;
  }

  div.transaction-type-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
  }

  div.transaction-type-icon img {
    width: 30px;
  }

  div.transaction-info-area {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  div.transaction-info-area label {
    color: #000 !important;
    font-size: 16px;
    font-weight: 500;
  }

  div.transaction-info-area span {
    color: #000000b6;
  }

  div.transaction-value-area {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    height: 100%;
    align-items: center;
  }

  div.transaction-value-area .positive, .negative {
    color: #FF0F74;
    font-size: 16px;
    font-weight: 500;
  }

  div.transaction-value-area .positive {
    color: rgb(76, 194, 76);
  }

  section.quick-start-section {
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
  }

  section.quick-start-section .shortcut-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    margin-top: 17px;
    background-color: #F2F7FF;
  }

  div.shortcut-section h1 {
    color: #000;
    margin: 10px 0 0 0;
  }

  div.button-quick-action {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: #E7F0FF;
    transition: all ease .2s;
    cursor: pointer;
  }

  div.button-quick-action label {
    position: absolute;
    left: 20%;
    bottom: -30px;
    color: #000;
    font-size: 14px;
    font-weight: 500;
  }

  div.button-quick-action:hover {
    transform: scale(1.1);
  }

  div.shortcut-section .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }
</style>