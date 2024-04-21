<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
const authStore = useAuthStore()

const userName = ref('')
const password = ref('')
</script>

<template>
  <main>
    <form @submit.prevent>
      <input v-model="userName" type="text" />
      <input v-model="password" type="password" />
      <button @click="() => authStore.authenticate(userName, password)" />
    </form>
  </main>
</template>
