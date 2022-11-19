<template>
  <div class="card__container"> 
    <div class="card">
      <img src="../assets/image-qr-code.png" alt="qr code">
      <h1>{{heading}}</h1>
      <p>{{body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QrCard',
  props: {
    heading: String,
    body: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
  h1,h3,p {
    font-family: 'Outfit';
  }
  h1 {
    font-size: 22px;
    margin-top: 22px;
  }
  p {
    font-size: 15px;
    margin: 1rem 1rem 24px;
    color:#7D889E;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  .card__container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D5E1EF;
    height: 100%;
  }
  .card {
    width: 320px;
    background-color: #FFF;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
  }
</style>
