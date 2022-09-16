<template>
  <div class="home">
    <Pokemons></Pokemons>
  </div>
</template>

<script>
import Pokemons from '@/components/Pokemons.vue'

export default {
  name: 'HomeView',
  components: {
    Pokemons,
}
}
</script>
