<template>
    <div class="row d-flex justify-content-center m-0">
        <div class="card col-8 col-sm-5 col-lg-3 mx-5 my-4" v-for="(pokemon, i) in pokemons" :key="i">
            <router-link
                :to="{ name: 'details', query: { id: (pokemon.url).slice(-4).replace(/[^0-9]/g, ''), name: pokemon.name, urlPokemon: pokemon.url } }"
                style="text-decoration:none; color: black;">
                <div>
                    <img class="img-fluid"
                        :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + (pokemon.url).slice(-4).replace(/[^0-9]/g, '') +'.png'"
                        alt="">
                </div>
                <div class="text-start ms-2 ">
                    <h6 class="fw-bolder text-muted">Nº {{ (pokemon.url).slice(-4).replace(/[^0-9]/g, '') }}</h6>
                    <h5 class="fw-bolder mt-3">{{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}</h5>
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
        morePokes() {
            this.$store.dispatch('getMorePokes', this.$store.getters.getNext);
        }
    }
}
</script>

<style scoped>
.card {
    border: none;
    background: rgb(231, 231, 130);
    border-radius: 15px;
    animation: mover 0.3s ease-in;
}

@keyframes mover {
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.card:hover {
    background: white;
}

.btn {
    height: 50px;
    width: 200px;
    background: rgb(223, 223, 98);
    color: white;
}

.btn:hover {
    background: white;
    color: rgb(223, 223, 98);
}
</style>