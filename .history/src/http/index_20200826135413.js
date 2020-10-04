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
        console.log(res.data.data);
        let category = lodash.groupBy(res.data.data, "category");
        for (let i in category) {
            let obj = {};
            obj["分类"] = i;
            obj["数量"] = category[i].length;
            this.chartData.rows.push(obj);
        }
    })
    .catch(err => {
        console.log(err);
    });

recommend(){
    return service.get('/recommend')
},