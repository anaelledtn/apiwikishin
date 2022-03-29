<template>
    <div class="center">
        <h3>Se connecter</h3>
        <form method="post" @submit="checkForm">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error.id">{{ error }}</li>
                </ul>
            </p>
            <div class="txt_field">
                <input type="text" required v-model="email">
                <span></span>
                <label > Email </label>
            </div>
            <div class="txt_field">
                <input type="password" required v-model="pass">
                <span></span>
                <label > Mot de passe </label>
            </div>
            <input type="submit" value="Se connecter">
            <div class="singup_link">
                <router-link class="link" :to="{name: 'Registration'}">Créer un compte </router-link>
            </div>       
        </form>
    </div>
</template>
 
<script>
    export default{
        name:'login-component',
        components:{},
        data() {
            return {
                email: '',
                pass: '',
                errors: []
            }
        },
        methods:{
            checkForm: function (e) {
                e.preventDefault();
                this.errors = [];
                if (!this.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                    this.errors.push('email invalide');
                    
                }
                if(this.pass.lenght < 1){
                    this.errors.push('Veuillez entrer un mot de passe');
                    return;
                }
                

                if(!this.errors.length){
                    // Appel api
                    let us = this.users.filter(user => user.email == this.email);
                    if(us.length != 1) {
                        this.errors.push('Cet utilisateur n\'existe pas');
                        return;
                    }
                    us = us[0];

                    if(us.password != this.pass) {
                        this.errors.push('mauvais mot de passe');
                        return;
                    }

                    this.user = {
                        isLogged: true,
                        prenom: us.prenom,
                        email: us.email,
                        password: us.password,
                        admin: us.admin
                    };
                    this.$router.push({ name: 'Home' });
                }
            }
        }
    }
</script>

<style scoped>
    .center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background: white;
        border: 1px solid silver;
        border-radius: 10px;
    }

    .center h3{
        text-align: center;
        padding: 0 0 20px 0;
        border-bottom: 1px solid silver;

    }

    .center form{
        padding: 0 40px;
        box-sizing: border-box;
    }

    form .txt_field{
        position: relative;
        border-bottom: 2px solid #adadad;
        margin: 30px 0;
    }

    .txt_field input{
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
    }

    .txt_field label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }

    .txt_field span::before{
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #85ddff;
        transition: .5s;
    }

    .txt_field input:focus ~ label,
    .txt_field input:valid ~ label{
        top: -5px;
        color: #85ddff;

    }

    .txt_field input:focus ~ span::before,
    .txt_field input:valid ~ span::before{
        width: 100%;
    }

    input[type="submit"]{
        width: 100%;
        height: 50px;
        border: 1px solid;
        background: #85ddff;
        border-radius: 25px;
        font-size: 18px;
        color: black;
        font-weight: 700;
        cursor: pointer;
        outline: none;
        margin-bottom: 15px;
    }

    input[type="submit"]:hover{
        border-color: #85ddff;
        transition: .5s;
    }

    .signup_link{
        margin: 3px 0;
        text-align: center;
        font-size: 16px;
        color: #666666;
        margin-bottom: 15px;
    }

    .link{
        color: #85ddff;
        text-decoration: none;
        margin-bottom: 15px;
    }

    .link:hover{
        text-decoration: underline;
    }
    
</style>