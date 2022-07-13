// src\utils\request.ts
import type { AxiosRequestHeaders } from 'axios'
import axios from 'axios'
import { store } from '@/store'

export const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
})

request.interceptors.request.use((config) => {
  const { user } = store.state
  if (user)
    (config.headers as AxiosRequestHeaders).Authorization = `Bear ${user.token}`

  return config
}, (error) => {
  return Promise.reject(error)
})
