import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3000'
})

// 拦截器
service.interceptors.request.use(config => {
  const token = localStorage.getItem('userToken')
  if (token) {
    config.headers.common['Authorization'] = 'Bearer ' + token
    // config.headers.common['Authorization'] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

const api = (params) => {
  service({
    url: params.url,
    method: params.method || 'POST',
    data: params.data || {}
  })
  .then((response) => {
    let data = response.data
    params.callback(data)
  })
}

export default api
