<template>
  <div class="dashboard-container">
    <h1 class="title">Bem vindo ao Painel do aluno</h1>

     <!-- CONTAINER 1 -->
     <v-container class="mt-10">
        <v-card class="pa-6" elevation="2">
          <h2 class="text-h5 mb-6">📘 Progresso do aluno</h2>

          <v-row class="align-center text-center" justify="space-between">
            <!-- Exercícios concluidos -->
            <v-col cols="4" mb="4" class="d-flex flex-column align-center">
                <h3 class="text-subtitle-1 mb-2"> Exercícios Realizados </h3>

                <v-progress-circular
                  :model-value="75"
                  size="120"
                  width="12"
                  color="primary"
                >
                  <strong>75%</strong>
                </v-progress-circular>
            </v-col>

             <!-- Trabalhos entregues -->
            <v-col cols="4" mb="4" class="d-flex flex-column align-center">
                <h3 class="text-subtitle-1 mb-2">Trabalhos Realizados </h3>

                <v-progress-circular
                  :model-value="89"
                  size="120"
                  width="12"
                  color="success"
                >
                  <strong>89%</strong>
                </v-progress-circular>
            </v-col>

              <!-- Trabalhos pendentes -->
              <v-col cols="4" mb="4" class="d-flex flex-column align-center">
                <h3 class="text-subtitle-1 mb-2"> Provas Realizadas </h3>

                <v-progress-circular
                  :model-value="20"
                  size="120"
                  width="12"
                  color="red"
                >
                  <strong>20%</strong>
                </v-progress-circular>
            </v-col>
          </v-row>
        </v-card>
     </v-container>

    <!-- CONTAINER 2 -->
    <v-container>
      <v-row>
        <!-- Card Notas -->
         <v-col cols="12" sm="4">
            <v-card 
            class="dashboard-card"
            elevation="6"
            @click="$router.push('/dashboard/notas')"
            >
               <v-card-title class="text-center">
                  <v-icon size="48">mdi-book-open-variant</v-icon>
               </v-card-title>
               <v-card-text class="text-center card-text">
                 Notas
               </v-card-text>   
            </v-card>
         </v-col>

         <!-- Card Exercicios -->
          <v-col cols="12" sm="4">
             <v-card
              class="dashboard-card"
              elevation="6"
              @click="$router.push('/dashboard/exercicios')"
             >
                <v-card-title class="text-center">
                  <v-icon size="48">mdi-pencil</v-icon>
                </v-card-title>
                <v-card-text class="text-center card-text">
                  Exercicios
                </v-card-text>
            </v-card>
          </v-col>

           <!-- Card Trabalhos -->
          <v-col cols="12" sm="4">
            <v-card
              class="dashboard-card"
              elevation="6"
              @click="$router.push('/dashboard/trabalhos')"
            >
              <v-card-title class="text-center">
                <v-icon size="48">mdi-clipboard-text</v-icon>
              </v-card-title>
              <v-card-text class="text-center card-text">
                Trabalhos 
              </v-card-text>
            </v-card>
          </v-col>
      </v-row>
    </v-container>

    <!--CONTAINER 3-->
    <v-container class="mt-10">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="2">
            <h2 class="text-h5 mb-4">📌 Próximas atividades</h2>
            <v-list density="confortable">
              <v-list-item>
                <v-list-item-title>
                  <strong>Prova Matemática</strong> - 12/12
                </v-list-item-title>
              </v-list-item>

                <v-divider></v-divider>

              <v-list-item>
                <v-list-item-title>
                  <strong>Entrega do trabalho de robótica</strong> - 15/12
                </v-list-item-title>
              </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-title>
                    <strong>Exercício de Manutenção</strong> - 4/4
                  </v-list-item-title>
                </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Avisos importantes -->
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="2">
            <h2 class="text-h5 mb-4">📢Avisos importantes</h2>

            <v-alert type="info" variant="tonal" class="mb-4">
               A escola estará fechada dia 20 para manutenção
            </v-alert>

            <v-alert type="success" variant="tonal">
              Notas 2º bimestre liberadas
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-6">

      <!-- Ranking da turma -->
       <v-card class="mb-6" elevation="2">
          <v-card-title class="text-h6">🏆Ranking da Turma </v-card-title>
          <v-divider></v-divider>

          <v-list>
            <v-list-item
              v-for="(aluno, index) in ranking"
              :ket="aluno.id"
            >
              <v-row class="align-center" no-gutters>

                <!-- Avatar -->
                 <v-col cols="3" class="d-flex justify-center">
                    <v-avatar size="70">
                      <img :src="aluno.avatar"></img>
                    </v-avatar>
                 </v-col>

                 <!-- Nome + posição -->
                 <v-col cols="3">
                    <div class="text-subtitle-1 font-weight-bold">
                      {{  index + 1 }}º - {{ aluno.nome }}
                    </div>
                    <div class="text-body-2 grey--text">
                        Pontos: {{  aluno.pontos }}
                    </div>
                 </v-col>


                 <!-- Medalha + Nível -->
                 <v-col cols="3" class="text-right pr-4">
                    <div class="text-subtitle-2 font-wight-bold">
                     <v-icon size="26" class="mr-1" color="amber">mdi-medal</v-icon>
                     <span class="font-weight-medium">Medalhas: {{ aluno.medalhas }}</span>
                    </div>

                    <div class="d-flex align-center justify-end mt-1">
                      <v-icon size="26" class="mr-1" color="yellow darken-3">mdi-star</v-icon>
                      <span class="font-weight-medium">Nível: {{ aluno.nivel }}</span>
                    </div>
                  </v-col>
                 </v-row>
            </v-list-item>
          </v-list>
       </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ranking = ref([
  {id: 1, nome: 'Fulano', pontos:450, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aluno1"},
  {id: 2, nome: 'Cicrano', pontos:450, avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aluno1"}
])
</script>

<style scoped>
  .dashboard-container {
    padding: 20px;
    padding-top: 80px !important;
  }

  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .dashboard-card {
    cursor: pointer;
    transition: transform 0.2s ease;
    padding: 15px;
    border-radius: 12px;
  }

  .dashboard-card:hover {
    transform: scale(1.05);
  }

  .card-text {
    font-size: 18px;
    font-weight: 600;
  }

</style>
