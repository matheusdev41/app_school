<template>
  <v-app>
    <AppHeader v-if="!isLogin" />
    <v-main class="pa-6">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue"
import AppHeader from "./components/AppHeader.vue";
import AppDrawer from "./components/AppDrawer.vue";

const route = useRoute()

const isLogin = computed(() => route.matched.some(r => r.meta && r.meta.noLayout))
</script>