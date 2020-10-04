import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 10000
})

service.interceptors.response.use(
    (res) => {
        return res.data
    }, err => {
        console.log(err)
    })

export default service //抛出

axios
    .get("/api/article/allArticle")
    .then(res => {
        co
    })
    .catch(err => {
        console.log(err);
    });

recommend(){
    return service.get('/recommend')
},