<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { AppRoute } from '@/router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="AppRoute.index">Home</RouterLink>
        <button v-if="authStore.user" @click="authStore.signOut">SignOut</button>
      </nav>
    </div>
  </header>

  <RouterView />
  =={{ JSON.stringify(authStore.user) }}==
</template>

<style scoped></style>
