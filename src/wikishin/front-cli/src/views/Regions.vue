<template>
    <div class='Regions'>
        <h1 class="texte">Régions</h1>
        <div class="boxContainer">
            <div class="elementsContainer">
                <input type="text" placeholder="Recherchez une région" class="search">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'regions-component',
        components:{}
    }
</script>

<style scoped>
   .texte{
       text-align: center;
       font-size: 20px;
   }

   .boxContainer{
       margin: auto;
       position: relative;
       width: 250px;
       height: 42px;
       border: 2px solid #85ddff;
       padding: 0px 10px;
       border-radius: 50px;
       background: white;
   }

   .elementsContainer{
       width: 100%;
       height: 100%;
       vertical-align: middle;
   }

   .search{
       border: none;
       height: 100%;
       width: 100%;
       padding: 0px 5px;
       border-radius: 50px;
       font-size: 18px;
       color: #424242;
       font-weight: 500;
   }

   .search:focus{
       outline: none;

   }


</style>