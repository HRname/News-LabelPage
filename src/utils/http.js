import axios from "axios";

const httpInstance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000,
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
},e=> Promise.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data,e => {
    return Promise.reject(e)
})

export default httpInstance