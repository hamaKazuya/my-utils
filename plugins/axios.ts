export default ({ $axios }: any) => {

  $axios.setToken('access_token')

  $axios.onRequest((config: any) => {
    $axios.setHeader('Access-Control-Allow-Origin', '*')
    console.log('start request')
  })
  $axios.onResponse((response: any) => {
    console.log('end request', response)
    return response
  })
  $axios.onError((error: any) => {
    throw error.response
  })
}
