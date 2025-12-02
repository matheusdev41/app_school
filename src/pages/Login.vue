<template>
    <v-layout class="login-wrapper">
        <!-- Lado esquerdo: Formulário -->
        <v-sheet class="left-pane pa-10 d-flex flex-column justify-center">
            <div>
                <h1 class="title">Bem vindo!</h1>
                <v-form @submit.prevent="login" ref="form">
                    <v-text-field
                      v-model = "email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      density="confortable"
                      class="mb-4"
                      required 
                    />
                    <v-text-field 
                      v-model="password"
                      label="Senha"
                      type="password"
                      variant="outlined"
                      density="confortable"
                      class="mb-6"
                      required
                    />

                    <v-btn 
                      color="primary"
                      size="large"
                      block
                      type="submit"
                      class="mb-3">
                      Entrar
                    </v-btn>
                </v-form>
            </div>
        </v-sheet>
        <!-- Lado direito - imagem -->
         <v-sheet class="right-pane">
            <div class="overlay"></div>
            <img src="" alt="">
         </v-sheet>
    </v-layout>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            email:"",
            password:""
        };
    },
    methods: {
        login() {
            console.log("Email:", this.email);
            console.log("Senha:", this.password);
            alert("Login enviado!")
        }
    }
}
</script>

<style scoped>

.login-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
}
.left-pane {
    width: 35%;
    background: #ffffff;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.12);
}

.right-pane {
    width: 65%;
    position: relative;
    overflow: hidden;
}

.login-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, 
    rgba(0,0,0,0.4), rgba(0,0,0,0.15));
    z-index: 1;
}
.title {
    font-size: 15;
    margin-bottom: 20px;
}
</style>