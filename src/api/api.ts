import http from "./http";
interface login {
    password: string,
    username: string
}
export const loginAPI = (params: login) => http.post('/admin/login', params)