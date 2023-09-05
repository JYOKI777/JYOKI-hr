// 引入库
import axios from 'axios'

// create an axios instance
// 创建axios实例
const service = axios.create({
  // 配置基准路径。最终 url = baseURL + 接口url
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  // 请求超时配置，单位ms
  timeout: 5000 // request timeout
})

// 请求拦截器
// request interceptor
service.interceptors.request.use()

// 响应拦截器
// response interceptor
service.interceptors.response.use()

// 暴露实例
export default service
