<template>
    <div class='Home'>
        <p class="texte">Bienvenue sur WIKISHIN ! Le site wiki du jeu Genshin Impact !</p>
        <div class="parent">
            <img class="img" src="../assets/genshin.jpg" alt="photo de personnages genshin">
        </div>
    </div>
</template>

<script>
    export default{
        name:'home-component',
        components:{}
    }
</script>

<style scoped>
   .img{
       width:70%;
       padding-left: 10px;;
       display: block;
       margin: 0px auto;

   }

   .parent{
       text-align: center;
   }

   .texte{
       text-align: center;
       font-size: 30px;
   }
</style>