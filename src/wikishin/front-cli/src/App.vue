<template>
  <div class="glob">
    
    <div id="app">
      <!--header-->
      <header class="header">
        <nav class="menu">
          <div class="inner">
            <div class="partgauche">
              <router-link :to="{name: 'Home'}">
                <img class="logo" src="./assets/Wikishin_logo_basique.png" alt="logo site">
              </router-link>
            </div>
            <div class="partdroite">
              <router-link class="link" :to="{name: 'Personnages'}" v-show="!getCurrentInstance().appContext.config.globalProperties.user.isLogged"> Personnages </router-link>
              <router-link class="link" :to="{name: 'Armes'}"> Armes </router-link>
              <router-link class="link" :to="{name: 'Regions'}"> Régions </router-link>
              <router-link class="link" :to="{name: 'Artefacts'}"> Artéfacts </router-link>
              <router-link class="link" :to="{name: 'Profil'}"> Compte </router-link>
            </div>
          </div>
        </nav>
      </header>
      <router-view />
      
    </div>
  </div>
</template>

<script setup>
    import { getCurrentInstance } from 'vue'
    import router from './router/router'
    if (!getCurrentInstance().appContext.config.globalProperties.user.isLogged) {
        router.push({ name: 'Login' })
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

  .inner{
      width: 80%;
      margin: auto;
  }
  /*forme de la page*/
  html, body{
      background-color: #fffdf2;
      display: table;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: 'Nunito';
  }

  /*header*/
  .menu{
      background-color: #7E81EB;
      height: 85px;
      width: 100%;
      line-height: 85px;
      box-shadow: 1px 1px 12px #555;
  }
  .partgauche{
      float: left;
      margin-right: 0%;
      height: 85px;
      width: 200px;
  }
  .logo{
      padding: 0;
      width: 100%;
      display: block;
      margin-top: 10px;

  }
  .partdroite{
      float: right;
  }
  .link{
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      padding: 0;
      margin: 0 10px;
      color: white;
  }
  .link:hover{
      color: #76397c;
  }

  @media screen and (max-width: 900px) {
  .link {
    font-size: 15px;
    margin: 0 0;
  }
  .partgauche{
      float: left;
      margin-right: 0%;
      height: 85px;
      width: 100px;
  }
}

  @media screen and (max-width: 650px) {
  .link {
    font-size: 10px;
    margin: 0 0;
  }
  .partgauche{
      float: left;
      margin-right: 0%;
      height: 85px;
      width: 100px;
  }
}

</style>
