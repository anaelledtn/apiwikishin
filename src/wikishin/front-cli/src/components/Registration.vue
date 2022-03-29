<template>
    <div class="center">
        <h3>Inscription</h3>
        <form method="post">
            <div class="txt_field">
                <input type="text" required>
                <span></span>
                <label > Prénom </label>
            </div>
            <div class="txt_field">
                <input type="text" required>
                <span></span>
                <label > Email </label>
            </div>
            <div class="txt_field">
                <input type="password" required>
                <span></span>
                <label > Mot de passe </label>
            </div>
            <input type="submit" value="Inscription">
            <div class="singup_link">
                <router-link class="link" :to="{name: 'Login'}">Se connecter </router-link>
            </div>       
        </form>
    </div>
</template>
 
<script>
    export default{
        name:'registration-component',
        components:{}
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