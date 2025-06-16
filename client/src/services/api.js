import axios from 'axios';
const api = axios.create({
  baseURL: 'https://sahara-backend-6fn6.onrender.com',
  timeout: 80000,
  headers: {
    "Content-Type":"application/json",
    Accept: "application/json",
  },
});

//Request interceptor to inject token on each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {

    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(error)=>{
  return Promise.reject(error);
}
);

//response interceptor
api.interceptors.response.use((response)=>{
  return response;
},
(error)=>{
  //handle common errors globally
  if(error.response){
    if(error.response.status===401){
      //redirect to login page
      window.location.href="/login";
    }
    else if(error.response.status===500){
      console.error('server error, pls try again later');
    }
    else if(error.code==="ECONNABORTED"){
      console.error("request timeout, pls try again");
    }
    return Promise.reject(error);
  }
})
export default api;
