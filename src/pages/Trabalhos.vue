<template>
    <div class="trabalhos-container">
        <h2 class="text-5 font-weight-bold">📘 Trabalhos</h2>

        <v-container class="py-8">
            <!-- BOTÃO NOVO TRABALHO -->
             <v-btn
             color="primary"
             class="mt-4"
             pretend-icon="mdi-plus"
             >
                Novo Trabalho
            </v-btn>

            <!-- Filtros -->
             <v-container class="py-8">
                <v-row>
                    <!-- Disciplina -->
                     <v-col cols="12" md="4">
                        <v-select
                        label="Disciplina"
                        :items="disciplinas"
                        v-model="filtros.disciplina"
                        ></v-select>
                     </v-col>

                     <!-- Status -->
                      <v-col cols="12" md="4">
                        <v-select
                        label="Status"
                        :items="['Todos', 'Pendente', 'Entregue']"
                        v-model="filtros.status"
                        ></v-select>
                      </v-col>

                      <!-- Dificuldade -->
                       <v-col cols="12" md="4">
                        <v-select
                        label="Dificuldade"
                        :items="['Todos', 'Fácil', 'Médio', 'Difícil']"
                        v-model="filtros.dificuldade"
                        ></v-select>
                       </v-col>
                </v-row>
             </v-container>

             <!-- LISTA DE TRABALHOS -->
              <v-row>
                <v-col
                    cols="12"
                    md="4"
                    v-for="tr in listaFiltrada"
                    :key="tr.id"
                >
                    <v-card class="pa-4" elevation="2">
                        <div class="d-flex justify-space-between">
                            <strong>{{ tr.titulo }}</strong>
                            <v-chip :color="tr.concluido ? 'green' : 'orange' " size="small" >
                            </v-chip>
                        </div>

                        <p class="mt-2 mb-0">
                            {{ tr.descricao }}
                        </p>
                    </v-card>
                </v-col>
              </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disciplinas: ['Todos','Português','Matemática','História','Ciências'],

            filtros: {
                disciplina: 'Todos',
                status: 'Todos',
                dificuldade: 'Todos',
            },

            trabalhos: [
                {
                  id: 1,  
                  titulo: 'Sistema Solar',
                  descricao: 'Produzir uma apresentação explicando os planetas gasosos',
                  dataEntrega: '20/12/2025',
                  disciplina:"Ciências",
                  dificuldade: "Médio",
                  concluido: false,
                },
                {
                  id: 2,  
                  titulo: 'Revisão Gramática',
                  descricao: 'Escrever um texto aplicando sujeito e predicado corretamente',
                  dataEntrega: '20/12/2025',
                  disciplina:"Português",
                  dificuldade: "Médio",
                  concluido: true,
                },
            ]

        };
    },
    computed: {
        listaFiltrada() {
            return this.trabalhos.filter(tr => {
                const matchDisciplina = 
                    this.filtros.disciplina === 'Todos' ||
                    tr.disciplina === this.filtros.disciplina;
                
                const matchStatus = 
                    this.filtros.status === 'Todos' ||
                    (this.filtros.status === 'Entregue' && tr.concluido) ||
                    (this.filtros.status === 'Pendente' && !tr.concluido);
                    
                const matchDificuldade =
                    this.filtros.dificuldade === 'Todos' ||
                    tr.dificuldade === this.filtros.dificuldade;
                    
                return matchDisciplina && matchDificuldade && matchStatus
            });
        },
    }
};
</script>


<style scoped>
    .trabalhos-container {
        padding: 20px;
        padding-top: 80px !important;
    }
</style>