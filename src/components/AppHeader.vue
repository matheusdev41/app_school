<template>
    <v-app-bar 
        class="header"
        color="primary" 
        elevation="2"
        density="comfortable">
            <!-- Logo -->
             <v-icon
             size="40"
             class="mr-4">
                mdi-school
            </v-icon>

            <!-- TÍTULO INSTITUCIONAL -->
            <div class="d-flex flex-column">
                <span class="text-h6 font-weight-bold">Instituição de Ensino</span>
                <span class="text-caption">Sistema Acadêmico</span>
            </div>

            <v-spacer />

            <!-- Menu -->
            <v-btn variant="text" class="mx-2 text-white" to="/inicio">Início</v-btn>
            <v-btn variant="text" class="mx-2 text-white" to="/alunos">Alunos</v-btn>
            <v-btn variant="text" class="mx-2 text-white" to="/turmas">Turmas</v-btn>
            <v-btn variant="text" class="mx-2 text-white" to="/relatorios">Relatórios</v-btn>

            <!-- ICONE DO USUÁRIO -->
             <v-btn icon>
                <v-icon>mdi-account-circle</v-icon>
             </v-btn>
    </v-app-bar>
</template>

<style scoped>
.header {
    padding: 10px;
}

</style>