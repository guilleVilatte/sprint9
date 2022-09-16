<template>
    <div class="" v-for="(pokemon, i) in pokemons" :key="i">
        <h4 class="" v-if="pokemon.name != undefined">{{ pokemon.name.toUpperCase() }}</h4>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Pokemons',
    created() {
        this.$store.dispatch('getPokes');
    },
    computed: {
        ...mapState(['pokemons'])
    }
}
</script>

<style>

</style>