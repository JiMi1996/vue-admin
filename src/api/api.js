import { post } from './http'

export const login = params => post('/api/seller/login', params)
