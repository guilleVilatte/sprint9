<template>
    <div class="text-secondary">
      <div class="modal-overlay" ></div>
      <div class="row modal two bg-dark" >
        <div @click="close()" class="icon close"></div>
        <div class="my-4 ">
          <img src="../../public/TituloUniversoPokémon.png" class="images img-fluid" alt="">
        </div>
        <h3 class="text-warning">CREATE YOUR ACCOUNT</h3>
        <input type="text" class="col-10" placeholder="First Name" v-model="firstName">
        <input type="text" class="col-10" placeholder="Last Name" v-model="lastName">
        <input type="email" class="col-10" placeholder="Email Adress" v-model="email">
        <input id="password" type="password" class="col-10" placeholder="Password" v-model="password">
        <button type="btn" class="btn btn-secondary text-white col-10 mt-5">Create Account</button>
      </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            invalidEmail: false
        };
    },
    methods: {
        close() {
            this.$store.commit("closeModal");
        }
    },
}
</script>

<style>
/*EL ESTILO ESTÁ MAYORMENTE EN LOGIN PARA NO REPETIR CODIGO*/
.two {
  height: 500px;
  top: 10%;
}
.close {
    background-image: url('../../public/rectangle-xmark-solid.svg');
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}
.close:hover{
    background-image: url('../../public/rectangle-xmark-blanco.svg');
}
.btn:hover{
  color:gray;
  background: rgb(198, 198, 68);
}
</style>