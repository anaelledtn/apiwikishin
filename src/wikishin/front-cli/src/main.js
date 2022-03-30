import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

let app = createApp(App);

app.config.globalProperties.user = {
    isLogged: false
};
/*
app.config.globalProperties.users = [
    {
        "id_user": 1,
        "prenom": "Roberto",
        "email": "roberto.pin@gmail.com",
        "password": "Roberto",
        "admin": false
    },
    {
        "id_user": 2,
        "prenom": "Anaelle",
        "email": "anaelle.danton@gmail.com",
        "password": "Anaelle",
        "admin": true
    }
];*/

app.use(router).mount('#app');
