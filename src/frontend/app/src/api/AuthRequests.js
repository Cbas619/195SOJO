import axios from "axios"

export const RegisterAPI = axios.create({baseURL: "http://localhost:4000/api/auth/register"})
export const LoginAPI = axios.create({baseURL: "http://localhost:4000/api/auth/login"})