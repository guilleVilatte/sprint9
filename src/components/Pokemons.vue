<template>
    <div class = "row d-flex justify-content-center">
        <div class="card col-3 mx-5 my-4" v-for="(pokemon, i) in pokemons" :key="i">
            <h4 class="">{{ pokemon.name.toUpperCase() }}</h4>
            <img :src= "'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + (pokemon.url).slice(-4).replace(/[^0-9]/g, '') +'.png'" alt="">
        </div>
        <button class="btn col-2 mx-auto" @click="morePokes">More Pokemons</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Pokemons',
    created() {
        this.$store.dispatch('getPokes', 0)
    },
    computed: {
        ...mapState(['pokemons'])
    },
    methods: {
        morePokes(){
            this.$store.dispatch('getMorePokes', this.$store.getters.getNext);
        }
    }
}
</script>

<style scoped>
    .card{
        border-radius: 10px;
        background: rgb(166, 166, 235);
    }
</style>