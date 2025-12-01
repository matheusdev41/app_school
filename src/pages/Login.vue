<template>
    <div class="login">
        <h1>Login Aluno</h1>
        <form @submit.prevent="fazerLogin">
            <input type="text" v-model="usuario" placeholder="Usuário" required>
            <input type="password" v-model="senha" placeholder="Senha" required>
            
        </form>
    </div>
</template>

<script setup> 
    function fazerLogin(){

    }
</script>