<template>
  <main>
    <div id="app">
      <qr-card tit="qr card component" heading="Improve your front-end skills by building projects" body="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"/>
    </div>
  </main>
</template>

<script>
import QrCard from './components/qr-card.vue'

export default {
  name: 'App',
  components: {
    QrCard
  }
}
</script>

<style>


* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
}
</style>
