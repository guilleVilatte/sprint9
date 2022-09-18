<template>
    <div class = "row d-flex justify-content-center">
        <div class="card col-3 mx-5 my-4" v-for="(pokemon, i) in pokemons" :key="i">
            <router-link :to="{ name: 'details', params: { id: (pokemon.url).slice(-4).replace(/[^0-9]/g, ''), urlPokemon: pokemon.url } }" style="text-decoration:none; color: black;">
                <div class="caja">
                    <img class="img-fluid" :src= "'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + (pokemon.url).slice(-4).replace(/[^0-9]/g, '') +'.png'" alt="">
                </div>
                <div class="text-start ms-2 ">
                    <h6 class="fw-bolder text-muted">Nº {{ (pokemon.url).slice(-4).replace(/[^0-9]/g, '') }}</h6>
                    <h5 class="fw-bolder mt-3">{{ pokemon.name.toUpperCase() }}</h5>
                </div>
            </router-link>
        </div>
    </div>
    <button class="btn mx-auto my-4" @click="morePokes">More Pokemons</button>
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
        border: none;
    }
    .caja{
        background: rgb(230, 223, 223);
        border-radius: 10px;
    }
    .btn{
        height: 50px;
        width: 200px;
        background: rgb(223, 223, 98);
        color: white;
    }
</style>