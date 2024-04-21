import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'
import type { User } from '@supabase/supabase-js'
import router, { AppRoute } from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>()

  const authenticate = async (email: string, password: string) => {
    const { data } = await supabase.auth.signInWithPassword({ email, password })

    user.value = data.user
    router.push(AppRoute.index)
  }

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log({ data }, 'getSession')
    user.value = data.session?.user ?? null
  }

  return {
    authenticate,
    getSession,
    user
  }
})
