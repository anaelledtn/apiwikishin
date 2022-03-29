<template>
    <div class='Personnages'>
        <h1 class="texte">Personnages</h1>
        <div class="boxContainer">
            <div class="elementsContainer">
                <input type="text" placeholder="Recherchez un personnage" class="search" v-model="this.search">
            </div>
            <div>
                <input type="button" v-if="this.isAdmin"/>
                <div class="persoall" v-for="perso in this.persosFiltered" :key="perso.id_perso">
                    <p class="personame">{{ perso.nom_p }}</p>
                    <p>{{ perso.etoiles }}</p>
                    <p>{{ perso.element }}</p>
                    <p>{{ perso.taille }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script> 
    import axios from 'axios'
    export default{
        name:'personnages-component',
        components:{},
        methods:{
            getPersos(){
               axios.get('http://localhost:5000/persos').then(response=>this.result=(response.data));
               /*this.persos =   [
                                    {
                                        "id_perso": 1,
                                        "nom_p": "Kazuha",
                                        "etoiles": 5,
                                        "element": "anemo",
                                        "taille": "moyenne"
                                    },
                                    {
                                        "id_perso": 3,
                                        "nom_p": "Kaeya",
                                        "etoiles": 4,
                                        "element": "cryo",
                                        "taille": "grande"
                                    },
                                    {
                                        "id_perso": 7,
                                        "nom_p": "Jean",
                                        "etoiles": 5,
                                        "element": "anemo",
                                        "taille": "grande"
                                    },
                                    {
                                        "id_perso": 9,
                                        "nom_p": "Sucrose",
                                        "etoiles": 4,
                                        "element": "anemo",
                                        "taille": "moyenne"
                                    }
                                ];*/
            }
        },
        data(){
            return{
                persos:[{}],
                search: '',
                result:[{}],
            }
        },
       /* mounted(){
            axios.get('http://localhost:5000/persos').then(response => this.persos=(response.data.results));
        },*/
        beforeMount(){
            this.getPersos()
        },
        computed: {
            persosFiltered() { 
                return this.persos.filter(perso => {
                    return perso.nom_p.toLowerCase().includes(this.search.toLowerCase())
                })
            },
            isAdmin(){
                console.log(this.user);
                return !this.user.admin;
            }
        }
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