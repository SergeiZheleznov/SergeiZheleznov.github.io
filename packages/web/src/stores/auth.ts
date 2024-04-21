import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>()

  const authenticate = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    user.value = data.user
  }

  return {
    authenticate,
    user
  }
})
