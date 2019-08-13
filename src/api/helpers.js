import axios from 'axios';
const urlMap ={
  development:'/',
  production:'http://www.jiguangcloud.com/vue-element/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get(url){
  return function(params){
    return axios.get(baseUrl+url,{
      params
    }).then((res) =>{
      const {errno,data} = res.data;
      if(errno === ERR_OK){
        return data;
      }
    }).catch((e) => {

    })
  }
}



























// import axios from 'axios'

// const urlMap = {
//   development: '/',
//   production: 'http://ustbhuangyi.com/sell/'
// }
// const baseUrl = urlMap[process.env.NODE_ENV]
// const ERR_OK = 0

// export function get(url) {
//   return function(params = {}) {
//     return axios.get(baseUrl + url, {
//       params
//     }).then((res) => {
//       const {errno, data} = res.data
//       if (errno === ERR_OK) {
//         return data
//       }
//     }).catch((e) => {
//     })
//   }
// }
