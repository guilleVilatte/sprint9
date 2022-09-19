<template>
  <div class="home" style="height: 100vh">
    <router-link to="/pokedex" style="text-decoration: none;">
      <div class="dex">
        <p class="p-3 fs-5 fw-bolder" >Pokedex</p>
        <img class="img-fluid" src="@/../public/pokemon-first-generation-pokemon-wallpaper-preview.jpg" alt="">
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  .dex{
    text-decoration: none;
    border-radius: 10px;
    overflow: hidden;
    background: rgb(223, 223, 98);
    width: 40%;
    margin: auto;
    color: white;
  }
  .dex:hover{
    color: rgb(223, 223, 98);
    background: white;
  }
  @media only screen and (max-width: 995px){
    .dex{
      width: 60%;
    }
  }
  @media only screen and (max-width: 595px){
    .dex{
      width: 80%;
    }
  }
</style>
