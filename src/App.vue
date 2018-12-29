<template>
  <div id="app">
    <h3>Encrypted Message</h3>
    <div class="encrypted-text-block">
      {{ encryptedMessage }}
    </div>
    <h3>Decryption Key</h3>
    <div class="key-container">
      <div class="encryption-grid">
        <div># <input type="text" maxlength="1" class="key-input form-control" v-model="key.hash" /></div>
        <div>% <input type="text" maxlength="1" class="key-input form-control" v-model="key.percent" /></div>
        <div>* <input type="text" maxlength="1" class="key-input form-control" v-model="key.astric" /></div>
    
        <div>~ <input type="text" maxlength="1" class="key-input form-control" v-model="key.tilda" /></div>
        <div>&lt; <input type="text" maxlength="1" class="key-input form-control" v-model="key.lessThan" /></div>
        <div>+ <input type="text" maxlength="1" class="key-input form-control" v-model="key.plus" /></div>
      
        <div>} <input type="text" maxlength="1" class="key-input form-control" v-model="key.rightCurly" /></div>
        <div>= <input type="text" maxlength="1" class="key-input form-control" v-model="key.equals" /></div>
        <div>@ <input type="text" maxlength="1" class="key-input form-control" v-model="key.at" /></div>
      
        <div>&amp; <input type="text" maxlength="1" class="key-input form-control" v-model="key.and" /></div>
        <div>? <input type="text" maxlength="1" class="key-input form-control" v-model="key.question" /></div>
        <div>$ <input type="text" maxlength="1" class="key-input form-control" v-model="key.dollar" /></div>
      </div>
    </div>
    <div class="right">
      <button @click="decrypt" type="button" class="btn btn-primary margin-right-lg">Decrypt</button>
    </div>
    <h3>Decrypted Message</h3>
    <div v-if="!wrongKey" class="decrypted-block">
      {{ decryptedMessage }}
    </div>
    <div v-else class="error-message">
      <img src="https://gifimage.net/wp-content/uploads/2017/10/dennis-nedry-gif-3.gif" />
    </div>
  </div>
</template>

<script>
  import crypto from '@/lib/crypto';

  export default {
    name: 'app',
    data () {
      return {
        encryptedMessage: 'cb16b7ec944eaf755efe4844c1263bf9e040f36688cf81c30cfd143d6b29b28319c1e40a8aa12a34570355e2441eb255cbc006460b91b535d4ecb21ed28d8029f45110d009bc296f5f00e64f4f6c896f5c282bfcfd8ade7de0721e18dcf874bd7568f5d9834964d198cbda1c2367f23ed75396f18c0fa41978d31a883f0ba995d71911b3ced35d58ff6e13e75cd7ee0388c9fab9d416f6277603260b51a03c0e0591c3feaf3f54c0394194017294bf052ce134395f600aa95e4dd4c3472fd1bda5d85172bd6b8a94e302daac50d255c1ea12da8d71428e1154e114cbfa3532fe24d233716034df46f2946ef836916eaca15a19935c2781c4e67368a08912a13a7741b3455f24d390202f1c9d9c9d97be7d7d530292ee5baa2cbe890ef0acffb2d23a8ef34ae588b1ef4391ce056b28fe9e3185c6edb57d3b0db8ca40fcdba35704aa9e1ed276e1eb17aa64ca801a26429e65ee5ae585f16a2422afe9fb92710db92372676ae751abeeb8ceab05a039203ed626110342e998c1726d7ec39cf6d541f8032f3d7031e08b738dac1315f44f5986e6bdc9e16092741795e2458f6062b163557bebbcc21d9174aacc9b9258edfa590748b88f5d7fb9c26b1bed610eb84e2bc5cc0bc1e2ef5c451bf591a9778c0abf17b91d659020cdbc5c1b7c5e4c5be0f6368e1e52c52b37ca811d8cd51eb28645eaf37156273dacedeea8e386519e98d58a055bef54c6597e6674f6c0f1d0',
        decryptedMessage: '',
        wrongKey: false,
        key: {
          hash: '',
          percent: '',
          astric: '',
          tilda: '',
          lessThan: '',
          plus: '',
          rightCurly: '',
          equals: '',
          at: '',
          and: '',
          question: '',
          dollar: ''
        }
      }
    },
    methods: {
      decrypt () {
        this.wrongKey = false;
        try {
          this.decryptedMessage = crypto.decrypt(this.encryptedMessage, this.creatKey());
        } catch (err) {
          this.decryptedMessage = '';
          this.wrongKey = true;
        }
      },
      creatKey () {
        return Object.keys(this.key).map(k => this.key[k]).join('');
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px 400px 60px 400px;
  }

  h3 {
    padding-left: 20px;
    text-align: center;
  }

  .margin-right-lg {
    margin-right: 20px;
  }

  .right {
    text-align: right;
  }

  .error-message {
    font-size: 30px;
    color: red;
    white-space: pre;
    text-align: center;
  }

  .encrypted-text-block {
    word-wrap: break-word;
    white-space: normal;
    padding: 20px;
  }

  .encryption-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 25px;
    column-gap: 70px;
  }

  .key-input {
    width: 40px;
    display: inline;
  }

  .key-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  .decrypted-block {
    word-wrap: break-word;
    text-align: left;
    white-space: pre-wrap;
    font-size: 18px;
  }
</style>
