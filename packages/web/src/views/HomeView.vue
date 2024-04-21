<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'
const posts = ref<any[] | null>([])

const getPosts = async () => {
  let { data, error } = await supabase.from('posts').select('*')
  posts.value = data
  console.log({ posts, error })
}

onMounted(async () => {
  await getPosts()
})
</script>

<template>
  <main>HomeView</main>
  {{ JSON.stringify(posts) }}
</template>
