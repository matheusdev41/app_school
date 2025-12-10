<template>
    <div class="exercicios-container">
        <h2 class="text-h5 font-weight-bold">📘Exercícios</h2>

        <v-container class="py-8">
            <!-- TÍTULO E AÇÃO -->
             <v-row class="mb-6" align-center justify="space-between">
                <v-btn color="primary" prepend-icon="mdi-plus" @click="novoExercicio">
                    Novo Exercicio
                </v-btn>
             </v-row>

             <!-- FILTROS -->
              <v-card class="pa-4 mb-6" elevation="2">
                <v-row dense>
                    <v-col cols="12" md="4">
                        <v-select
                            label="Disciplina"
                            :items="disciplinas"
                            v-model="filtros.dificuldade"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-select
                            label="Status"
                            :items="['Todos', 'Concluído', 'Pendente']"
                            v-model="filtros.status"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-select
                            label="Dificuldade"
                            :items="['Todos', 'Fácil', 'Médio', 'Difícil']"
                            v-model="filtros.dificuldade"
                        ></v-select>
                    </v-col>
                </v-row>
              </v-card>

              <!-- LISTA DE EXERCÍCIOS -->
               <v-row dense>
                    <v-col
                    v-for="ex in listaFiltrada"
                    :key="ex.id"
                    md="6"
                    lg="4"
                    >
                        <v-card class="pa-4"></v-card>
                    </v-col>
               </v-row>

        </v-container>
    </div>

</template>

<script>
export default {
    data() {
      return {
        disciplinas: ['Matemática', 'Português', 'Ciências', 'História'],

        filtros: {
            disciplina: 'Todos',
            status: 'Todos',
            dificuldade: 'Todos',
        }
      }  
    },
    methods: {
        novoExercicio() {
            console.log("Criar novo exercício");
        },
    }
}
</script>

<style scoped>
.exercicios-container {
    padding: 20px;
    padding-top: 80px !important;
}

</style>