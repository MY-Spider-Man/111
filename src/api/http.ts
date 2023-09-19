import axios from "axios";


const config = {
    baseURL: "http://back.9yuecloud.com/"
}
class Request {
    instance: any;
    constructor(config: any) {
        this.instance = axios.create(config);
        this.instance.interceptors.request.use((config: any) => {
            // let token = localStorage.getItem("token");
            // if (token) {
            //     config.headers.Authorization = token;
            // }
            return config;
        })
        this.instance.interceptors.response.use((res: any) => {
            return res.data;
        }, (err: any) => {
            return Promise.reject(err);
        })
    }
    get(url: string, params: any) {
        return this.instance.get(url, { params })
    }
    post(url: string, params: any) {
        return this.instance.post(url,  params )
    }
}
export default new Request(config);