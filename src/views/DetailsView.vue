<template>
    <div class="container details">
        <div class="">
            <img :src="url + routeID + '.png'" class="img-fluid" alt="" v-if="url + routeID + '.png'">
        </div>
        <div class="">
            <h2 class="">{{  }}</h2>
            <div class="">
                
            </div>
            <div class="">
               
            </div>
            <div class="">
                
            </div>
            <div class="">
                
            </div>
            <div class="">
                
            </div>
            <div class="">
                
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
          this.routeID = this.$route.params.id
          this.routeURLPoke = this.$route.params.urlPokemon
          this.$store.dispatch("getPoke", this.routeURLPoke)
      },
      computed: {
          ...mapState(["pokemon"])
      },
  }
  </script>