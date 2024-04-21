<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { AppRoute } from '@/router'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const { getSession, user } = useAuthStore()
onMounted(async () => {
  await getSession()
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="AppRoute.index">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  {{ JSON.stringify(user) }}
</template>

<style scoped></style>
