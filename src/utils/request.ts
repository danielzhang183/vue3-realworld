// src\utils\request.ts
import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
})
