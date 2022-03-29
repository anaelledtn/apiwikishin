import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Personnages from '../views/Personnages.vue'
import Armes from '../views/Armes.vue'
import Artefacts from '../views/Artefacts.vue'
import Profil from '../views/Profil.vue'
import Regions from '../views/Regions.vue'

const routes = [{
    path:'/',
    name:'Home',
    component:Home
},
{
    path:'/login',
    name:'Login',
    component:Login
},
{
    path:'/registration',
    name:'Registration',
    component:Registration
},
{
    path:'/personnages',
    name:'Personnages',
    component:Personnages
},
{
    path:'/armes',
    name:'Armes',
    component:Armes
},
{
    path:'/artefacts',
    name:'Artefacts',
    component:Artefacts
},
{
    path:"/regions",
    name:'Regions',
    component:Regions
},
{
    path:'/profil',
    name:'Profil',
    component:Profil
}];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;