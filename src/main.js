import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from "./store"

//axios.defaults.baseURL ='https://axios-42402.firebaseio.com'
//axios.defaults.baseURL ='https://axios-42402.firebaseio.com'

//axios.defaults.headers.common['Authorization'] = "test header"
axios.defaults.headers.get['Accedddpts'] = 'application/json'


//intereptors are methods that intercept the request/res and can change headers or do another function during the res and reject
const reqIntercept = axios.interceptors.request.use(function(config) {
 console.log('REQUEST INTERCEPTOR', config)
 console.log(config)
 return config
})

const resIntercept = axios.interceptors.response.use(function(res) {
  console.log('RESPONSE INTERCEPTOR', res)
  console.log(res)
  return res
 })

 //remove intercetpros or eject them cancel them
 axios.interceptors.request.eject(reqIntercept)
 axios.interceptors.response.eject(resIntercept)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
