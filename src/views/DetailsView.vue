<template>
    <div class="container details pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-5 col-8 caja mb-5 mb-lg-0 me-lg-5">
            <img :src="url + routeID + '.png'" class="img-fluid" alt="" v-if="url + routeID + '.png'">
        </div>
        <div class="col-lg-5 col-8">
        <div class="caja2 row fw-bolder">
          <h2 class="col-12 py-3">{{ name[0].toUpperCase() + name.slice(1) }} Nº {{ routeID }}</h2>
          <div class="col-sm-6 text-start ms-3">
            <div class="col-6 ms-3">
              <p class=""> Altura </p>
            </div>
            <div class="col-6 ms-4">
              <p class="" v-if="pokemon.height"> {{ pokemon.height }} dm </p>
            </div>
            <div class="col-6 ms-3">
              <p class=""> Peso </p>
            </div>
            <div class="col-6 ms-4">
              <p class=""> {{ pokemon.weight}} lb </p>
            </div>
          </div>
          <div class="col-sm-5 text-start">
            <div class="col-5 ms-3">
              <p class=""> Habilidades </p>
            </div>
            <div class="col-12 ms-4" v-for="(ability, i) in pokemon.abilities" :key="i">
              <p class=""> {{ ability.ability.name}} </p>
            </div>
          </div>
        </div>
        <div class="">
            <div >
              <h5 class="text-start ms-3 fw-bolder mb-3 text-white"> Tipos </h5>
            </div>
            <div class="d-flex text-start ms-4 fw-bolder ">
              <div v-for="(type, i) in pokemon.types" :key="i" class="me-3">
                <p class="caja3">{{ type.type.name[0].toUpperCase() + type.type.name.slice(1) }}</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
  import axios from 'axios'
  
  export default {
      name: "DetailsView",
      data() {
          return {
              url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
              routeID: null,
              routeURLPoke: null,
              name: null,
              pokemon: {}
          };
      },
      created() {
          this.name = this.$route.query.name
          this.routeID = this.$route.query.id
          this.routeURLPoke = this.$route.query.urlPokemon
          axios.get(`https://pokeapi.co/api/v2/pokemon/${this.routeID}/`).then(response => this.pokemon = response.data)
          console.log(this.pokemon)
          this.$store.commit('restartingInit')
    },
  }
  </script>

  <style scoped>
    .caja{
        background: rgb(231, 231, 130);
        border-radius: 10px;
    }
    .caja2{
        background: rgb(86, 95, 163);
        border-radius: 10px;
        color: white;
        padding-bottom: 10px;
        margin-bottom: 50px;
    }
    .caja3{
      background-color:rgb(238, 179, 204);
      padding: 10px;
      border-radius: 10px;
    }
  </style>