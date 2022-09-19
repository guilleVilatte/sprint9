<template>
    <div class="d-flex flex-column justify-content-center align-items-center text-white fw-bolder">
      <div class="ms-2">
        FOLLOW POKEMON ESPAÑA:
      </div>
      <div class="col-4 d-flex justify-content-center ">
        <a href="https://www.facebook.com/PokemonOficialES" target="_blank" class="m-2">
          <div class="icon face"></div>
        </a>
        <a href="https://www.instagram.com/PokemonESP/" target="_blank" class="m-2">
          <div class="icon ig"></div>
        </a>
        <a href="https://twitter.com/Pokemon_ES_ESP" target="_blank" class="m-2">
          <div class="icon tw"></div>
        </a>
        <a href="https://www.youtube.com/user/PokemonOficialES" target="_blank" class="m-2">
          <div class="icon you"></div>
        </a>
      </div>
      <p class="mt-4">
        ©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo
      </p>
      <div class="text-center my-2">
        <div class="d-md-inline"><a class="link" href="https://www.pokemon.com/es/noticias-pokemon/" target="_blank"> Novedades |</a>
        </div>
        <div class="d-md-inline"><a class="link" href="https://www.pokemon.com/es/guia-para-padres-tutores/" target="_blank"> Guía para padres/tutores |</a></div>
        <div class="d-md-inline"><a class="link" href="https://support.pokemon.com/hc/en-us"
            target="_blank"> Servicio de atención al cliente |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://corporate.pokemon.com/es-es/"
            target="_blank"> Sobre nuestra compañía |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://www.pokemon.com/es/pais-region/"
            target="_blank"> Seleccionar país o región  |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://pokemon.gamespress.com/es"
            target="_blank"> Sitio de prensa Pokémon |</a></div>
        <div class="d-md-inline"><a class="link" href="https://www.pokemon.com/es/condiciones-de-uso/" target="_blank"> Condiciones de uso |</a></div>
        <div class="d-md-inline"><a class="link" href="https://www.pokemon.com/es/aviso-de-privacidad/"
            target="_blank"> Aviso de privacidad |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://www.pokemon.com/es/pagina-de-cookies/"
            target="_blank"> Página de Cookies</a> </div>
      </div>
    </div>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: #fbf8f8;
  position: relative;
  letter-spacing: 0.5px;
}

.link:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #fefefe;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
}

.link:hover:after {
  transform: scaleX(1);
}
.icon {
  margin-left: 15px;
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
  height: 26px;
  width: 30px;
}

.face {
  background-image: url('@/../public/facebook-brands.svg');
}

.face:hover {
  background-image: url('@/../public/facebook-brands-blanco.svg');
}

.ig {
  background-image: url('@/../public/instagram-brands.svg');
}

.ig:hover {
  background-image: url('@/../public/instagram-brands-blanco.svg');
}

.tw {
  background-image: url('@/../public/twitter-brands.svg');
}

.tw:hover {
  background-image: url('@/../public/twitter-brands-blanco.svg');
}

.you {
  background-image: url('../../public/youtube-brands.svg');
}

.you:hover {
  background-image: url('@/../public/youtube-brands-blanco.svg');
}
</style>