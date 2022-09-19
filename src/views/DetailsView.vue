<template>
    <div class="container details">
      <div class="row d-flex justify-content-center">
        <div class="col-5 caja me-5">
            <img :src="url + routeID + '.png'" class="img-fluid" alt="" v-if="url + routeID + '.png'">
        </div>
        <div class="col-5">
        <div class="caja2 fw-bolder">
          <h2 class="col-12 py-3">{{ name[0].toUpperCase() + name.slice(1) }} Nº {{ routeID }}</h2>
          <div class="col-6 text-start ms-4">
            <div class="col-6">
              <p class=""> Altura </p>
            </div>
            <div class="col-6 fs-5">
              <p class=""> {{ pokemon.height }} dm </p>
            </div>
            <div class="col-6">
              <p class=""> Peso </p>
            </div>
            <div class="col-6">
              <p class=""> {{ pokemon.weight}} </p>
            </div>
          </div>
        </div>
        <div>
            <div class="">
              <p class=""> Tipos </p>
            </div>
            <div class="d-flex">
              <div v-for="(type, i) in pokemon.types" :key="i" class="me-3">
                <p class="tipo">{{ type.type.name }}</p>
              </div>
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
              routeURLPoke: null,
              name: null,
          };
      },
      created() {
          this.name = this.$route.query.name
          this.routeID = this.$route.query.id
          this.routeURLPoke = this.$route.query.urlPokemon
          this.$store.dispatch("getPoke", this.routeURLPoke)
      },
      computed: {
          ...mapState('pokemon')
      }
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
        color: white;
    }
  </style>