<template>
    <div class="notas-container">

        <!-- Título -->
         <h2 class="text-h5 mb-6">📘 Nostas dos alunos</h2>

         <!-- Card resumo -->
          <v-container class="py-8">
            <v-row class="mb-6" dense>
                <v-col cols="12" md="6" class="mb-3">
                    <v-card class="pa-4" elevation="2">
                        <h3 class="text-h6">Média Geral</h3>
                        <p class="text-h4 font-weight-bold text-primary">{{ mediaGeral }}</p>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6" class="mb-3">
                    <v-card class="pa-4" elevation="2">
                        <h3 class="text-h6">Melhor disciplina</h3>
                        <p class="text-h4 font-weight-bold text-success">{{ melhorDisciplina }}</p>
                    </v-card>
                </v-col>
            </v-row>

            <!-- TABELA DE NOTAS -->
             <v-card elevation="2">
                <v-card-title>📑 Histórico de avaliações </v-card-title>

                <v-data-table
                    :items="avaliacoes"
                    :headers="headers"
                    class="elevation-0"
                >
                    <template #item.nota="{ item }">
                        <span :class="notaClass(item.nota)">
                            {{ item.nota }}
                        </span>
                    </template>

                    <template #item.media="{ item }">
                        {{ (item.nota * item.peso ).toFixed(2) }}
                    </template>
            
                </v-data-table>
             </v-card>
          </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mediaGeral: 82,
            melhorDisciplina: "Matemática",
            situacao: "Em andamento",
        

        headers: [
            { title: "Disciplina", key: "disciplina" },
            { title: "Avaliação", key: "avaliacao" },
            { title: "Nota", key: "nota" },
            { title: "Peso", key: "peso" },
            { title: "Média Parcial", key: "media"},
        ],

        avaliacoes: [
            { disciplina: "Matemática", avaliacao: "Prova 1", nota: 9.0, peso: 0.4 },
            { disciplina: "Português", avaliacao: "Redação", nota: 7.5, peso: 0.3 },
            { disciplina: "História", avaliacao: "Trabalho", nota: 6.0, peso: 0.2},
            { disciplina: "Geografia", avaliacao: "Prova 1", nota: 4.8, peso: 0.3},
        ]
        }
    },
    computed: {
        situacaoClass() {
            return this.situacao === "Aprovado"
            ? "text-success"
            : "text-warning";
        }
    },
    methods: {
        notaClass(nota) {
            if (nota >= 7) return "text-success font-weight-bold";
            if (nota >= 5) return "text-warning font-weight-bold";
            return "text-error font-weight-bold";
        }
    }
}
</script>
<style scoped>
    .notas-container {
        padding: 20px;
        padding-top: 80px;
    }
</style>