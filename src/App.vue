<template>
  <Header class=" fondo"></Header>
  <Footer class="fondo"></Footer>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from './components/Footer.vue';
  
  export default {
    name: 'App',
    components: {
    Header,
    Footer
}
  }
  </script>

<style>
  .fondo{
    background-image: url('@/../public/8fe70cb1e91ce33041f8760968bb9edb.jpg');
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: cover;
  }
</style>
