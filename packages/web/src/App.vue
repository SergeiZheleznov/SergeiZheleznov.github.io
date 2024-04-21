<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

import { supabase } from './utils/supabase'
const posts = ref<any[] | null>([])

async function getTodos() {
  let { data, error } = await supabase.from('posts').select('*')
  posts.value = data
  console.log({ posts, error })
  //countries.value = posts
}

onMounted(async () => {
  await getTodos()
})
</script>

<template>
  <header>
    {{ JSON.stringify(posts) }}

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
