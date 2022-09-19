<template>
    <div>
        <div class="modal-overlay"></div>
        <div class="row modal bg-dark">
            <div @click="close()" class="icon close"></div>
            <div class="my-4 ">
                <img src="../../public/TituloUniversoPokémon.png" class="images img-fluid" alt="">
            </div>
            <h3 class="text-warning">ENTER YOUR EMAIL ADRESS</h3>
            <form @submit="ds">
                <input type="text" class="col-10" placeholder="Email Adress" v-model="email" required id="email"
                    pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}">
                <div v-if="invalidEmail" class="text-danger">Please enter a valid email address.</div>
                <button type="btn" class="btn btn-secondary text-white col-10">Continue</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            invalidEmail: false
        };
    },
    methods: {
        close() {
            this.$store.commit("closeModal");
        }
    }
}
</script>

<style>
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    height: 120vh;
}

.modal {
    display: block;
    border-radius: 10px;
    height: 300px;
    width: 45%;
    text-align: center;
    position: fixed;
    top: 30%;
    left: 30%;
}

.btn:hover {
    background: rgb(56, 56, 155);
}

input {
    border-radius: 7px;
    height: 40px;
    margin-bottom: 10px;
    background: rgb(194, 192, 192);
    color: rgb(169, 169, 16);
    cursor: text;
}

input:focus {
    background: rgb(108, 107, 107);
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

.check {
    height: 12px;
    width: 12px;
    margin-left: 10px;
    line-height: 30px;
    cursor: default;
}
.images {
  width: 26%;
  margin-right: 45px;
}

@media only screen and (max-width: 1050px) {
    .modal {
        width: 60%;
        left: 20%;
    }
}

@media only screen and (max-width: 800px) {
    .modal {
        width: 70%;
        left: 15%;
    }
}

@media only screen and (max-width: 600px) {
    .modal {
        width: 100%;
        left: 3%;
    }
}
</style>