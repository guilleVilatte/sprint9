<template>
  <div>
    <BurgerModal v-if="showBurgerModal"></BurgerModal>
    <div class="icon burger d-sm-none" @click="viewBurgerModal"></div>
    <nav class="d-none d-sm-flex justify-content-center">
      <a class="logs me-3" @click="viewLog()">LOG IN </a>
      <a class="logs" @click="viewReg()"> SIGN UP</a>
    </nav>
    <img class="img-fluid img" src="@/../public/TituloUniversoPokémon.png" alt="">
    <nav class="fs-6 fs-lg-5">
      <router-link @click="reiniciarInit()" class="me-4" to="/">Home</router-link>
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view />
    <LogIn v-if="showModalLog === true"></LogIn>
    <Register v-if="showModalReg === true"></Register>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LogIn from './LogIn.vue';
import Register from './Register.vue';
import BurgerModal from './BurgerModal.vue';

export default {
  computed: {
    ...mapState(["showModalLog", "showModalReg", "showBurgerModal"])
  },
  methods: {
    viewLog() {
      this.$store.commit("viewLogin");
    },
    viewReg() {
      this.$store.commit("viewRegister");
    },
    viewBurgerModal() {
      this.$store.commit("mostrarBurgerModal");
    },
    reiniciarInit() {
      this.$store.commit('restartingInit')
    }
  },
  components: { LogIn, Register, BurgerModal }
}
</script>

<style>
.burger {
  cursor: pointer;
  background-image: url('../../public/bars-staggered-solid.svg');
}

.burger:hover {
  background-image: url('../../public/bars-staggered-blanco.svg');
}

.icon {
  margin-left: 15px;
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
  height: 26px;
  width: 30px;
}

.img {
  width: 50%;
  animation: mover 2s ease-in;
}

@keyframes mover {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.logs {
  cursor: pointer;
}

#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(223, 223, 98);
  border: 2px solid rgb(223, 223, 98);
  padding: 5px;
  border-radius: 10px;
}

nav a:hover {
  color: rgb(223, 223, 98);
  border: 2px solid rgb(223, 223, 98);
  padding: 5px;
  border-radius: 10px;
}
</style>