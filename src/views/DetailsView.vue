<template>
    <div class="container details">
      <div class="row d-flex justify-content-center">
        <div class="col-5 caja me-5">
            <img :src="url + routeID + '.png'" class="img-fluid" alt="" v-if="url + routeID + '.png'">
        </div>
        <div class="col-5 caja2">
          <h2 class="col-12 my-5">{{ pokemon.forms[0].name[0].toUpperCase() + pokemon.forms[0].name.slice(1) }} Nº {{ routeID }}</h2>
          <div class="col-6 d-flex flex-column justify-content-start">
            <div class="col-6">
              <p class="fw-bolder text-white"> Altura </p>
            </div>
            <div class="col-6 fs-5">
              <p class="fw-bolder text-black"> {{ pokemon.height }} dm </p>
            </div>
            <div class="col-6">
              <p class="fw-bolder text-muted"> Peso </p>
            </div>
            <div class="col-6">
              <p class="fw-bolder text-muted"> {{ pokemon.weight}} </p>
            </div>
            <div class="">
                
            </div>
            <div class="">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
  import { mapState } from 'vuex';
  
  export default {
      name: "DetailsView",
      data() {
          return {
              url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
              routeID: null,
              routeURLPoke: null
          };
      },
      created() {
          this.routeID = this.$route.query.id
          this.routeURLPoke = this.$route.query.urlPokemon
          this.$store.dispatch("getPoke", this.routeURLPoke)
      },
      computed: {
          ...mapState(["pokemon"])
      },
  }
  </script>

  <style scoped>
    .caja{
        background: rgb(230, 223, 223);
        border-radius: 10px;
    }
    .caja2{
        background: rgb(50, 161, 205);
        border-radius: 10px;
    }
  </style>