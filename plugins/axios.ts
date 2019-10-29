import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import { rootStore } from '@/store'

// TODO $axiosの型定義を定義されたinterfaceが探せてない
export default ({ $axios }: any) => {
  $axios.setToken('access_token')
  $axios.onRequest((config: AxiosRequestConfig) => {
    rootStore.changeLoadingVisibility(true)
    $axios.setHeader('Access-Control-Allow-Origin', '*')
    console.log('start request')
  })
  $axios.onResponse((response: AxiosResponse) => {
    console.log('end request', response)
    // rootStore.changeLoadingVisibility(false)
    return response
  })
  $axios.onError((error: AxiosError) => {
    throw error.response
  })
}
