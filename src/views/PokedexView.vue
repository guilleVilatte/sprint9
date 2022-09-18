<template>
  <div class="pokedex">
    <Pokemons></Pokemons>
  </div>
</template>

<script>
  import Pokemons from '@/components/Pokemons.vue'
  
  export default {
    name: 'PokedexView',
    components: {
      Pokemons,
  }
  }
  </script>